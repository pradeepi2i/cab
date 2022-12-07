


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
                    <a href="index.html"><h4>Home</h4></a>
                    <a href="about.html"><h4>About</h4></a>
                    <a href="contact.html"><h4>Contact</h4></a>
                    <a href="login.html"><h4>Login</h4></a>
                    </div>`                
                    
    }
}