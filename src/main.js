// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const loginPage = document.getElementById('first-screen');
const registerPage = document.getElementById('register-screen');
const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
loginPage.style.display = 'none';
registerPage.style.display = 'flex';
});
