// Aquí la pantalla de inicio de sesión
import {
    loginApp,
} from '../index.js';

export const logIn = () => {
    const divLogin = document.createElement('div');
    const viewLogIn = `
<div id="first-screen" class="login-page">
        <aside class="first-aside"></aside>
        <form class="user-login">
            <img src="img/neightalk.png" class="logo"></img>
            <label for="email">Inicia sesión con tu cuenta:</label>
            <input type="email" id="email" class="log-input" placeholder="Correo Electrónico" autocomplete="username">
            <label for="password"></label>
            <input type="password" id="password" class="log-input" placeholder="Contraseña" autocomplete="curent-password">
            <button type="button" id="enterBtn" class="enter-btn">Iniciar sesión</button>
            <h3 class="linked">O <a href="#/RegisterTemplate" class = "linked">regístrate</a>.</h3>
        </form>
    </div>`;

    divLogin.innerHTML = viewLogIn;

    const accessBtn = divLogin.querySelector('#enterBtn');
    accessBtn.addEventListener('click', () => {
        // Ingresar con cuenta registrada
        const eMail = document.getElementById('email').value;
        const password1 = document.getElementById('password').value;
        loginApp(eMail, password1);
    });
    return divLogin;
};