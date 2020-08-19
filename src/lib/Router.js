// eslint quotes: ["error", "single", { "avoidEscape": true }]

// Llamamos a las funciones de las rutas
import {
  logIn,
} from './templates/HomeTemplate.js';
import {
  signUp,
} from './templates/RegisterTemplate.js';
import {
  timeLine,
} from './templates/TimelineTemplate.js';
import {
  profile,
} from './templates/ProfileTemplate.js';


// Dar la orden según el caso y exportar variable para ir cambiando las rutas
const templates = (hash) => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  switch (hash) {
    case '#/':
      root.appendChild(logIn());
      break;
    case '#/RegisterTemplate':
      root.appendChild(signUp());
      break;
    case '#/TimelineTemplate':
      root.appendChild(timeLine());
      break;
    case '#/ProfileTemplate':
      root.appendChild(profile());
      break;
    default:
      root.innerHTML = `<h1>Oops! aquí no hay nada que ver</h1>`; // eslint-disable-line quotes
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
