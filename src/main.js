// Este es el punto de entrada de tu aplicacion
import {
    routing
} from './lib/Router.js';
import { logIn } from './lib/templates/HomeTemplate.js';

const init = () => {
    document.getElementById('root').appendChild(logIn());
    window.addEventListener('hashchange', () => {
        routing(window.location.hash);
    });
};
window.addEventListener('load', init);