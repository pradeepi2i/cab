export class Register {
    submit: Element;
    register: Element;
    error = false;
    constructor(registerContainer: Element) {
        this.register = registerContainer;
        this.renderRegister();
        this.submit = this.getElementById("registrationForm");
        this.createEventListener();
    }

    renderRegister() {
        this.register.innerHTML = `<div class="popup">
        <form action="add" id="registrationForm" name="registrationForm">
            <div class="input-fields">
                <label for="firstName">First Name :</label>
                <input class=input-registration  id="firstName" type="text" name="firstName" size="12" maxlength="15" pattern="[A-Za-z]{3,}"
                    title="Name required" placeholder="First Name" required>

            </div>
            <div class="input-fields">
                <label for="LastName">Last Name :</label>
                <input class=input-registration  id="lastName" type="text" name="lastName" placeholder="Last Name" size="12" maxlength="15" pattern="[A-Za-z]{1,}"
                    required>
            </div>
            <div class="input-fields">
                <label for="cabNumber">Cab Number :</label>
                <input class=input-registration  id="cabNumber" type="text" name="cabNumber" size="11" maxlength="10" placeholder = "Cab Number" required>
            </div>
            <div class="input-fields">
                <span>Gender:</span>
                <input class=input-registration  id="gender" type="radio" name="gender" value="male" required>
                <label for="gender">male</label>
                <input class=input-registration  id="gender" type="radio" name="gender" value="female">
                <label for="gender">female</label>
            </div>
            <div class="input-fields">
                <label for="mobile-number">Mobile Number :</label>
                <select name="countryCode" id="country-code" class = "input-registration"  required>
                    <option value="" selected disabled> </option>
                    <option value="+90">+90</option>
                    <option value="+891">+891</option>
                    <option value="+04">+04</option>
                    <option value="+91">+91</option>
                </select>
                <input class=input-registration  id="mobileNumber" type="number" name="mobileNumber"  required>
            </div>
            <div class="input-fields">
                <label for="email">Email :</label>
                <input class=input-registration  id="email" type="email" name="email" placeholder="your@example.com">
            </div>
            <div class="input-fields">
                <label for="licenseNumber">License Number :</label>
                <input class=input-registration  id="licenseNumber" type="text" name="licenseNumber" required>
            </div>
            
            <div class="input-fields">
                <label for="carModel">Car Model :</label>
                <input class=input-registration  id="carModel" type="text" name="carModel" placeholder="Model Name">
            </div>
          
            <div class="input-fields">
                <label for="password">Password :</label>
                <input class=input-registration  name="password" id="password" type=" text" placeholder="Password" required>
            </div>
            <div class="input-fields terms">
                <input class=input-registration  type="checkbox" name="agree" id="agree" required>
                <label for="check"> I agree to terms and policy</label>
            </div>
            <div class="input-fields confirm">
                <input class="input-registration secondary-btn" type="submit" value="Cancel" name="cancel" id="cancel">
                <input class="input-registration  secondary-btn" type="submit" value="Register" name="submit" id="submit">
            </div>
        </form>
    </div>`;
    }

    /* <div class="input-fields">
                <label for="driverRating">Driver Rating :</label>
                <input class=input-registration  id="driverRating" type="text" name="driverRating">
            </div>
            <div class="input-fields">
                <label for="cabStatus">Cab Status :</label>
                <input class=input-registration  id="cabStatus" type="text" name="cabStatus" placeholder="Current Status">
            </div>
              <div class="input-fields">
                <label for="location">Location :</label>
                <input class=input-registration  name="currentLocation" id="location" type="text" placeholder="Location">
            </div> */
    createEventListener() {
        this.submit.addEventListener("submit", (e: Event) => {
            if (this.error) {
                this.submitForm(e);
            } else {
                alert("Enter correct values");
                e.preventDefault();
            }
        });
        console.log("Registered successfully");        

        const firstName = this.getElementById("firstName") as HTMLInputElement;
        this.initializeEventListener(firstName,  "[A-Za-z]{3,}");

        const lastName = this.getElementById("lastName") as HTMLInputElement;
        this.initializeEventListener(lastName,  "[A-Za-z]{1,}");

        const cabNumber = this.getElementById("cabNumber") as HTMLInputElement;
        this.initializeEventListener(cabNumber,  "[A-Za-z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}");

        const mobileNumber = this.getElementById("mobileNumber") as HTMLInputElement;
        this.initializeEventListener(mobileNumber,  "[6-9][0-9]{9}");

        const email = this.getElementById("email") as HTMLInputElement;
        this.initializeEventListener(email,  "^[A-Za-z]+([0-9]*)@[A-Za-z]+\\.[a-z]{2,3}$");

        const licenseNumber = this.getElementById("licenseNumber") as HTMLInputElement;
        this.initializeEventListener(licenseNumber,  "[A-Za-z0-9]{4,15}");
        
    }

    getElementById(idName:string) {
        return document.getElementById(idName);
    }

    getQuerySelector(selector:string) {
        return document.querySelector(selector);
    }

    initializeEventListener(element:HTMLInputElement, pattern:string) {
        element.addEventListener("blur", (e:Event) => {
            e.preventDefault();
            this.callEventListener(element, pattern);
        });        

    }

    callEventListener(element: HTMLInputElement, pattern: string) {
        this.error = false;
        if (!element.value.match(pattern)) {
            element.style.border = "none";
            element.style.borderRadius = "5px";
            element.style.outline = "2px solid red";
        } else {
            element.style.outline = "none";
            this.error = true;
        }
    }

    submitForm(e: Event) {
        e.preventDefault();
        const formData = new FormData(this.submit as unknown as HTMLFormElement);
        const formDataObject = Object.fromEntries(formData);
        console.log(formDataObject);

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic ODkzNDUwMzIzMjpKYWdhbkAxMjM0NQ==");
        myHeaders.append("Cookie", "JSESSIONID=E1C50F179C79FEA41E3710066693B986");

        const requestOptions: unknown = {
            mode: "no-cors",
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch("http://localhost:8082/locations", requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }
}
