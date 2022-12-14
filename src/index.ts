import './scss/styles.scss';

import { Home } from './components/Home';
//import { Login } from './components/Login';
import { Register } from './components/Register';

import { getQuerySelector } from './components/Utils';
import { Ride } from './components/Ride';

const homeContainer: Element = getQuerySelector("#home");

if (homeContainer) {
    new Home(homeContainer);
}


// const loginContainer: Element = getQuerySelector("#login");

// if (loginContainer) {
//     new Login(loginContainer); 
// }
const registerContainer: Element = getQuerySelector("#register");

if(registerContainer) {
    new Register(registerContainer);
} 

const rideContainer: Element = getQuerySelector("#ride");

if(rideContainer) {
    new Ride(rideContainer);
}








