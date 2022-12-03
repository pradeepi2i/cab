import './styles.scss';
import {HeaderComponent} from './components/HeaderComponents';
import { HomeComponent } from './components/HomeComponent';

const loginContainer:Element = document.querySelector<HTMLElement>("#login");

if (loginContainer) {
    new HeaderComponent(loginContainer);
}

const homeContainer: Element = document.querySelector<HTMLElement>("#home");

if (homeContainer) {
    new HomeComponent(homeContainer);
}




