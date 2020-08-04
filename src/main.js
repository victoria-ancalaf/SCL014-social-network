// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const loginPage = document.getElementById('first-screen');
const registerPage = document.getElementById('register-screen');
const registerBtn = document.getElementById('register');
const newUserBtn = document.getElementById('newUserBtn');
const enterBtn = document.getElementById('enterBtn');

// Ir a la página de registro
registerBtn.addEventListener('click', () => {
    loginPage.style.display = 'none';
    registerPage.style.display = 'flex';
});

console.log(firebase);

// Crear una cuenta nueva
function register() {
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    })
};

newUserBtn.addEventListener('click', () => {
    register();
});


// Ingresar con cuenta registrada
function loginApp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });
};

enterBtn.addEventListener('click', () => {
    loginApp();
});


// Registrar con Google
const auth = firebase.auth();
const googleBtn = document.getElementById('googleBtn');
const provider = new firebase.auth.GoogleAuthProvider();

googleBtn.addEventListener('click', () => {
    auth.signInWithPopup(provider);
});