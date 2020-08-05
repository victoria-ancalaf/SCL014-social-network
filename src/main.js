// Este es el punto de entrada de tu aplicacion

import {
    myFunction
} from './lib/index.js';

myFunction();

const loginPage = document.getElementById('first-screen');
const registerPage = document.getElementById('register-screen');
const registerBtn = document.getElementById('register');
const newUserBtn = document.getElementById('newUserBtn');
const enterBtn = document.getElementById('enterBtn');
const screenTwo = document.getElementById('screen-two');

const auth = firebase.auth();
const googleBtn = document.getElementById("googleBtn");
const provider = new firebase.auth.GoogleAuthProvider();

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
        switch (register) {
            case 'emailAlreadyInUse':
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Email en uso.');
                }
                break;
            case 'invalidEmail':
                if (errorCode === 'auth/invalid-email') {
                    alert('Email inválido.');
                }
                break;
            case 'weakPassword':
                if (errorCode == 'auth/weak-password') {
                    alert('La contraseña es demasiado débil.');
                }
                break;
            default:
                alert(errorMessage);
        };
        console.log(error);
    })
};

newUserBtn.addEventListener('click', () => {
    register();
    registerPage.style.display = 'none';
    screenTwo.style.display = 'block';
});


// Ingresar con cuenta registrada
function loginApp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (expr) {
            case 'invalidEmail':
                if (errorCode === 'auth/invalid-email') {
                    alert('Email incorrecto.');
                }
                break;
            case 'userNotFound':
                if (errorCode === 'auth/user-not-found') {
                    alert('Usuario no encontrado.');
                }
                break;
            case 'wrongPassword':
                if (errorCode === 'auth/wrong-password') {
                    alert('Contraseña incorrecta.');
                }
                break;
            default:
                alert(errorMessage);
        };
        console.log(error);
    });
};


enterBtn.addEventListener('click', () => {
    loginApp();
    loginPage.style.display = 'none';
    screenTwo.style.display = 'flex';
});


googleBtn.addEventListener('click', () => {
    auth.signInWithPopup(provider);
});

// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
document.querySelector('.toggle-btn').addEventListener('click', showSidebar);

function showSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}