
    export class HomeComponent {
        homeContainer: Element;
        constructor(container:Element) {
            this.homeContainer = container;      
            this.renderHomePage();      
        }

        renderHomePage() {
            this.homeContainer.innerHTML = `
            <div class="container">
                <div class="navbar">
                    <div class="navbar-left">
                        <img src="./assets/taxilogo.png" alt="taxi-logo" id="taxiLogo">
                        <h1>HelloCabs</h1>
                    </div>
                    <div class="navbar-center">
        
                    </div>
                    <div class="navbar-right">
                        <h4>Home</h4>
                        <h4>About</h4>
                        <h4>Contact</h4>
                        <h4>Profile</h4>
                    </div>
                </div>
        
                <div class="book-ride">
                    <button class="primary-btn">Book Ride</button>
                </div>
        
            </div>`

        }



    }