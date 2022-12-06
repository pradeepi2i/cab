
export class Login {
    login: Element;
    submit: HTMLElement;
    constructor(loginContainer: Element) {
        this.submit = document.querySelector("#loginForm");
        this.login = loginContainer;
        this.renderLogin();
        this.createEventListener();
    }

    renderLogin() {
        this.login.innerHTML = `<div class="login-section">
        <form action="post" name="login" class="login-form" id="loginForm">
            <div class="login-details">
                <label for="mobileNumber">Username : </label>
                <input type="number" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number"
                    class="input">
            </div>
            <div class="login-details">
                <label for="password">Password : </label>
                <input type="text" name="password" id="password" placeholder="Password" class="input">
            </div>
            <div class="login-details">
                <input type="submit" name="submit" value="Login" id="submit">
            </div>
        </form>
    </div>`
    }

    createEventListener() {
        this.submit.addEventListener("submit", (e: Event) => {
            this.submitForm(e);
        })

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
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8082/locations", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }



}