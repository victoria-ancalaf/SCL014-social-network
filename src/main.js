// Este es el punto de entrada de tu aplicacion

import {
    routing
} from './lib/Router.js';
import { logIn } from './lib/templates/HomeTemplate.js';

const init = () => {
    document.getElementById('root').appendChild(logIn());
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        routing(window.location.hash);
    });
};
window.addEventListener('load', init);


// const auth = firebase.auth();
// const showName = document.getElementById('showName');
// auth.onAuthStateChanged(user => {
//     if (user) {
//         showName.innerHTML = `<h3>Hola ${user.displayName}</h3>`;
//     } else {
//         showName.innerHTML = '';
//     }
// });