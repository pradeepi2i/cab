import { getElementById } from "./Utils";

import Mustache from 'Mustache';

export class Ride {
    ride: Element
    constructor(rideContainer: Element) {
        this.ride = rideContainer;
        this.renderRide();
        this.createEventListener();
    }

    renderRide() {
        this.ride.innerHTML = `
        <div class="location-section">
        <form method="post" name="location" class="location" id="locationForm">
            <div class="location-details">
            <input list ="locations" id="sourceLocation" required autocomplete="off"  placeholder="Enter Your location" name="source" required>
            <datalist id="locations" class = "location">
                <option value="" selected disabled>Title </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
            </datalist>
            </div>
            <div class="location-details">
            <input list ="locations" id="destinationLocation" required autocomplete="off"  placeholder="Enter Your Destination" name="destination"required>
            <datalist id="locations" class = "location">
                <option value="" selected disabled>Title </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
            </datalist>                
            </div>
            <div class="location-details location-footer">
                <input type="submit" name="submit" value="Search" id="submit">
            </div>
        </form>
    </div> `
    }

    createEventListener() {
        const location = getElementById("sourceLocation")
        location.addEventListener("focus", () => {
            this.displayLocations();
        })
    }

    displayLocations() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/json");

        

        const  requestOptions:RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8082/locations", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(JSON.stringify(result.data[0].locationName));
                getElementById("locations").innerHTML = `
                <option value="" selected disabled>Title </option>
                <option value="Taramani"></option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                `
            })
            .catch(error => console.log('error', error));
    }



}