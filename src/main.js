// Este es el punto de entrada de tu aplicacion
import {
    routing
} from './lib/Router.js';
import { logIn } from './lib/templates/HomeTemplate.js';

var firebaseConfig = {
    apiKey: "AIzaSyDM2h2FxNmCkyRR6ddT_GFW7aRDzf_a0p4",
    authDomain: "social-network-proyect.firebaseapp.com",
    databaseURL: "https://social-network-proyect.firebaseio.com",
    projectId: "social-network-proyect",
    storageBucket: "social-network-proyect.appspot.com",
    messagingSenderId: "138624545118",
    appId: "1:138624545118:web:2f866c929e3cd845a05fcf",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const init = () => {
    document.getElementById('root').appendChild(logIn());
    window.addEventListener('hashchange', () => {
        routing(window.location.hash);
    });
};
window.addEventListener('load', init);