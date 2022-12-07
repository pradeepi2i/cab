import './scss/styles.scss';

import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';

const homeContainer: Element = document.querySelector<HTMLElement>("#home");

if (homeContainer) {
    new Home(homeContainer);
}


const loginContainer: Element = document.querySelector("#login");

if (loginContainer) {
    new Login(loginContainer); 
}
const registerContainer: Element = document.querySelector("#register");

if(registerContainer) {
    new Register(registerContainer);
} 








