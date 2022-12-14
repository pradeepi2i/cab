import { Header } from "./Header";
import { getElementById, getQuerySelector, fetchJson } from "./Utils";
import { locationTemplate, cabCategorytemplate } from "../templates/template";

export class Ride {
  header: Header;
  ride: Element;
  submit: Element;
  constructor(rideContainer: Element) {
    this.ride = rideContainer;
    this.renderRide();
    this.displayCabCategories();
    this.submit = getQuerySelector("#rideForm");
    this.createEventListener();
  }

  renderRide() {
    this.ride.innerHTML = `
        <div id="navbar" class = "navbar"></div>    
        <div id="rideInfo" class = "ride-section"></div>`;

    const navbar = getQuerySelector("#navbar");
    this.header = new Header(navbar);

    getQuerySelector("#rideInfo").innerHTML = `
        <div class="ride-section" id="rideInfo">
        <form method="post" name="rideForm" class="ride" id="rideForm">
            <div class="location-section">
            <div class="location-details">
            <input list ="location" id="sourceLocation" required autocomplete="off"  placeholder="Enter Your location" name="source" required>
            <datalist id="location" class = "locations-list">
            </datalist>
            </div>
            <div class="location-details">
            <input list ="location" id="destinationLocation" required autocomplete="off"  placeholder="Enter Your Destination" name="destination"required>
            <datalist id="location" class = "locations-list">
            </datalist>                
            </div>
            </div>
            <div class="categories">
                <div class="categories-list">
                    <div id="category">
                    </div>
                </div>
            </div>
            <div class="ride-details ride-footer">
                <input type="submit" name="submit" value="Search" id="submit">
            </div>
        </form>
        <div class="ride-page" id="rideDetails">  </div>
    </div> `;
  }

  createEventListener(): void {
    getElementById("sourceLocation").addEventListener("focus", () => {
      this.displayLocations();
    });

    getQuerySelector("#rideForm").addEventListener("submit", (e: Event) => {
      e.preventDefault();
      this.formSubmit();
      console.log("OK");
    });

    getQuerySelector("#submit").addEventListener("click", (e: Event) => {
      e.preventDefault();
      console.log("Ride Submitted");
      // const rideForm = getQuerySelector("#rideForm") as HTMLFormElement;
      // rideForm.style.display = "none";

      // const ridePage = getQuerySelector("#rideDetails") as HTMLElement;
      // ridePage.style.display = "block";

    });
  }

  displayLocations() {
    fetchJson("http://localhost:8082/locations", "location", locationTemplate);
  }

  displayCabCategories() {
    fetchJson(
      "http://localhost:8082/cabcategories",
      "category",
      cabCategorytemplate
    );
  }

  formSubmit() {
    const formData = new FormData(this.submit as unknown as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject);

    const pickupLocation = document.querySelector(
      `option[value=${formDataObject.source}]`
    ).id;
    const dropLocation = document.querySelector(
      `option[value=${formDataObject.destination}]`
    ).id;
    //const cabCategory = formDataObject.category
    const customerId = formDataObject.cabCategory;

    const raw = JSON.stringify({
      pickupLocation,
      dropLocation,
      customerId,
    });

    console.log("On Search", raw);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8082/rides", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (200 === result.status) {
          console.log("OK");
        } else if (500 === result.status) {
          alert("Invalid credentials");
        }
      })
      .catch((error) => console.log("error", error));
  }

}
