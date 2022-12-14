//import { getQuerySelector } from "./Utils";
export class Login {
    login: Element;
    submit: HTMLElement;
    mobileNumber: HTMLInputElement;
    password: HTMLInputElement;
    error = false;

    constructor(loginContainer: Element) {
        this.login = loginContainer;
        this.renderLogin();
        this.submit = this.getQuerySelector("#loginForm");
        this.mobileNumber = this.getQuerySelector("#mobileNumber");
        this.password = this.getQuerySelector("#password");
        this.createEventListener();

    }

    renderLogin() {
        this.login.innerHTML = `
        <div class="login-section">
        <form method="post" name="login" class="login-form" id="loginForm">
            <div class="login-details">
                <label for="mobileNumber">Username : </label>
                <input type="number" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number"
                    class="input">
            </div>
            <div class="login-details">
                <label for="password">Password : </label>
                <input type="text" name="password" id="password" placeholder="Password" class="input">
            </div>
            <div class="login-details login-footer">
               <p id="redirect">Didn't have an account? <a href="register.html">Register</a></p>
                <input type="submit" name="submit" value="Login" id="submit">
            </div>
        </form>
    </div>`;
    }

    createEventListener() {
        this.submit.addEventListener("submit", (e: Event) => {
            if (this.error) {
                this.submitForm(e);
                this.redirect("index.html");
            } else {
                alert("Enter correct values");
                e.preventDefault();
            }
        });

        this.mobileNumber.addEventListener("blur", () => {
            this.callEventListener(this.mobileNumber, "^[6-9][0-9]{9}$");
        });

        this.password.addEventListener("blur", () => {
            if (!this.password.value) {
                this.error = false;
                this.password.style.border = "none";
                this.password.style.borderRadius = "5px";
                this.password.style.outline = "2px solid red";
            } else {
                this.error = true
            }
        })

    }

    getElementById(idName:string) {
        return document.getElementById(idName);
    }

    getQuerySelector(selector:string) {
        return document.querySelector(selector) as HTMLInputElement;
    }

    submitForm(e: Event) {
        e.preventDefault();
        const formData = new FormData(this.submit as unknown as HTMLFormElement);
        const formDataObject = Object.fromEntries(formData);
        console.log(formDataObject);

        const raw = JSON.stringify({
            formDataObject
        });
        console.log(raw);


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(formDataObject),
            redirect: 'follow'
        };
        
        

        fetch("http://localhost:8082/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (200 === result.status) {
                    console.log("OK");

                } else if (500 === result.status) {
                    alert("Invalid credentials");
                }
            })
            .catch(error => console.log('error', error));
            
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


    redirect = (url: string, asLink = true) =>
        asLink ? (window.location.href = url) : window.location.replace(url);



}