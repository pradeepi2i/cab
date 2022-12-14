import {Header} from '../components/Header'
import {Content} from '../components/Content'
import { getElementById, getQuerySelector} from '../components/Utils'
import { Login } from './Login';

export class Home {
    header: Header;
    login: Login;
    content:Content;
    home:Element;
    constructor(container:Element) {
        this.home = container
        this.renderHome();
        this.createEventListener();
    }

    renderHome(): void {
        this.home.innerHTML = `
        <div id="navbar" class = "navbar"></div>    
        <div id="login"></div>
        <div id="content" class = "container"></div>`
        this.header = new Header(getQuerySelector("#navbar"));
        this.content = new Content(getQuerySelector("#content"));
        this.login = new Login (getQuerySelector("#login"))
    }

    createEventListener() {
        getElementById("start").addEventListener("click", () => {
            this.redirect("ride.html");
        });
    }

    redirect = (url: string, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);
}