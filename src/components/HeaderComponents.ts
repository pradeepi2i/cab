
export class HeaderComponent {
    header: Element;
    constructor(container: Element) {
        this.header = container;
        this.renderHeader();
    }

    renderHeader() {
        this.header.innerHTML = `
                <div class="navbar">
                    <div class="navbar-left">
                        <img src="./assets/taxilogo.png" alt="taxi-logo" id="taxiLogo">
                        <h1>HelloCabs</h1>
                    </div>
                    <div class="navbar-right">
                        <h4>Home</h4>
                        <h4>About</h4>
                        <h4>Contact</h4>
                        <h4>Profile</h4>
                    </div>
                </div>`
    }



}