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

const firebaseConfig = {
    apiKey: "AIzaSyDM2h2FxNmCkyRR6ddT_GFW7aRDzf_a0p4",
    authDomain: "social-network-proyect.firebaseapp.com",
    databaseURL: "https://social-network-proyect.firebaseio.com",
    projectId: "social-network-proyect",
    storageBucket: "social-network-proyect.appspot.com",
    messagingSenderId: "138624545118",
    appId: "1:138624545118:web:2f866c929e3cd845a05fcf",
    measurementId: "G-YH82TES751"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


/* //FUNCIÓN INICIAR SESIÓN

function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Ingresa una dirección de correo electrónico.');
      return;
    }
    if (password.length < 4) {
      alert('Ingresa una contraseña.');
      return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña incorrecta.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authwithemail]
  }
  document.getElementById('quickstart-sign-in').disabled = true;
} */

// FUNCIÓN CREAR CUENTA

function handleSignUp() {
    var email = document.getElementById('new-email').value;
    var password = document.getElementById('new-password').value;
    if (email.length < 4) {
        alert('Ingresa una dirección de correo electrónico.');
        return;
    }
    if (password.length < 4) {
        alert('Ingresa una contraseña.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('La contraseña es muy débil.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}

function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            document.getElementById('quickstart-sign-in').textContent = 'Sign out';
            document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
            if (!emailVerified) {
                document.getElementById('quickstart-verify-email').disabled = false;
            }
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
            document.getElementById('quickstart-sign-in').textContent = 'Sign in';
            document.getElementById('quickstart-account-details').textContent = 'null';
            // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]

    document.getElementById('enter-btn').addEventListener('click', toggleSignIn, false);
    document.getElementById('register-btn').addEventListener('click', handleSignUp, false);
}

window.onload = function() {
    initApp();
};