import {Header} from '../components/Header'
import {Content} from '../components/Content'

export class Home {
    header: Header;
    content:Content;
    home:Element;
    constructor(container:Element) {
        this.home = container
        this.renderHome();
    }

    renderHome() {
        this.home.innerHTML = `
        <div id="navbar" class = "navbar">    
        </div>    
        <div id="content" class = "container"></div>`
        console.log("Home" , this.home);
        const navbar = this.home.querySelector("#navbar");
        this.header = new Header(navbar);

        const content = this.home.querySelector("#content");
        this.content = new Content(content);
    }
}