
export class Header {
       header: Element;
    constructor(navbar: Element) {        
        this.header = navbar;
        this.renderHeader();        
    }

     renderHeader() {
          this.header.innerHTML = `              
                    <div class="navbar-left">
                        <img src="./assets/taxilogo.png" alt="taxi-logo" id="taxiLogo">
                        <h1>HelloCabs</h1>
                    </div>
                    <div class="navbar-right">
                    <a href="./html/home.html"><h4>Home</h4></a>
                        <h4>About</h4>
                        <h4>Contact</h4>
                        <h4>Profile</h4>
                    </div>`                
    }
}