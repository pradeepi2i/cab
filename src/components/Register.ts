export class Register {
    apply: Element;
    register: Element;
    constructor(registerContainer: Element) {
        this.register = registerContainer;
        this.renderRegister();
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
                <input class=input-registration  id="lastName" type="text" name="lastName" placeholder="Last Name" size="12" maxlength="15" pattern="[A-Za-z]{3,}"
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
                <input class=input-registration  id="mobile-number" type="number" name="mobileNumber"  required>
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
                <label for="driverRating">Driver Rating :</label>
                <input class=input-registration  id="driverRating" type="text" name="driverRating">
            </div>
            <div class="input-fields">
                <label for="cabStatus">Cab Status :</label>
                <input class=input-registration  id="cabStatus" type="text" name="cabStatus" placeholder="Current Status">
            </div>
            <div class="input-fields">
                <label for="carModel">Car Model :</label>
                <input class=input-registration  id="carModel" type="text" name="carModel" placeholder="Model Name">
            </div>
            <div class="input-fields">
                <label for="location">Location :</label>
                <input class=input-registration  name="currentLocation" id="location" type="text" placeholder="Location">
            </div>
            <div class="input-fields">
                <label for="password">Password :</label>
                <input class=input-registration  name="password" id="password" type=" text" placeholder="Password">
            </div>
            <div class="input-fields terms">
                <input class=input-registration  type="checkbox" name="agree" id="agree">
                <label for="check"> I agree to terms and policy</label>
            </div>
            <div class="input-fields confirm">
                <input class="input-registration secondary-btn" type="submit" value="Cancel" name="cancel" id="cancel">
                <input class="input-registration  secondary-btn" type="submit" value="Apply" name="submit" id="submit">
            </div>
        </form>
    </div>`;
    }

    createEventListener(){
        
        console.log("Registered successfully");        

    }
}
