import {Header} from '../components/Header'
import {Content} from '../components/Content'
import { getElementById, getQuerySelector} from '../components/Utils'

export class Home {
    header: Header;
    content:Content;
    home:Element;
    constructor(container:Element) {
        this.home = container
        this.renderHome();
        this.createEventListener();
    }

    renderHome() {
        this.home.innerHTML = `
        <div id="navbar" class = "navbar">    
        </div>    
        <div id="content" class = "container"></div>`

        const navbar = getQuerySelector("#navbar");
        this.header = new Header(navbar);
        const content = getQuerySelector("#content");
        this.content = new Content(content);
    }

    createEventListener() {
        getElementById("start").addEventListener("click", () => {
            this.redirect("ride.html");
        });
    }

    redirect = (url: string, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);
}