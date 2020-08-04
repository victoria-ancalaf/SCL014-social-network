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

console.log(firebase);

const auth = firebase.auth();
const googleBtn = document.getElementById("googleBtn");


const provider = new firebase.auth.GoogleAuthProvider();

googleBtn.onclick = () => auth.signInWithPopup(provider);