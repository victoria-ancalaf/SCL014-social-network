// Aquí la pantalla de inicio de sesión
import {
    loginApp
} from '../index.js';

export const logIn = () => {
    const divLogin = document.createElement('div');
    const viewLogIn = `
<div id="first-screen" class="login-page">
        <aside class="first-aside"></aside>
        <main class="user-login">
            <img src="img/neightalk.png" class="logo"></img>
            <label for="email">Inicia sesión con tu cuenta:</label>
            <input type="email" id="email" class="log-input" placeholder="Correo Electrónico"></input>
            <label for="password"></label>
            <input type="password" id="password" class="log-input" placeholder="Contraseña"></input>
            <button type="button" id="enterBtn" class="enter-btn">Iniciar sesión</button>
            <h2>O <a href="#/RegisterTemplate">regístrate</a>.</h2>
        </main>
    </div>`

    divLogin.innerHTML += viewLogIn;

    const enterBtn = divLogin.querySelector('#enterBtn');
    enterBtn.addEventListener('click', () => {
        // Ingresar con cuenta registrada
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        loginApp(email, password);
    })
    return viewLogIn;
};