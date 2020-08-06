//Llamamos a las funciones de las rutas

import {
    logIn
} from '.lib/templates/HomeTemplate.js';
import {
    signUp
} from '.lib/templates/RegisterTemplate.js';
import {
    timeLine
} from '.lib/templates/TimelineTemplate.js';
import {
    profile
} from '.lib/templates/ProfileTemplate.js';

//Dar la orden según el caso y exportar variable para ir cambiando las rutas

const templates = (hash) => {
    const root = document.getElementById('root');
    root.innerHTML = logIn();

    switch (hash) {
        case '#/':
            root.appendChild(logIn())
        case '#/RegisterTemplate':
            root.appendChild(signUp());
            break;
        case '#/TimelineTemplate':
            root.appendChild(timeLine());
            break;
        case '#/PofileTemplate':
            root.appendChild(profile());
        default:
            root.innerHTML = `<h1>Oops! aquí no hay nada que ver</h1>`
    }
};

export const routing = (hash) => {
    if (hash === '#/') {
        return templates(hash);
    }
    if (hash === '#/RegisterTemplate') {
        return templates(hash);
    }
    if (hash === '#/TimelineTemplate') {
        return templates(hash);
    }
    if (hash === '#/ProfileTemplate') {
        return templates(hash);
    }
    return templates(hash);
};