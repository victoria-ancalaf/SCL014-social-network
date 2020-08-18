// Aquí la pantalla de registro
import {
    register,
    googleLogin,
} from '../index.js';

export const signUp = () => {
    const registerTemplate = document.createElement('div');
    const viewSignUp = `
    <div id="register-screen" class="login-2page">
        <aside class="second-aside"></aside>
        <form class="user-login">
            <img src="img/neightalk.png" class="logo"></img>
            <label for="email"></label>
            <input type="email" id="new-email" class="log-input" placeholder="Correo electrónico" autocomplete="username">
            <label for="password"></label>
            <input type="password" id="new-password" class="log-input" placeholder="Contraseña" autocomplete="new-password">
            <button type="button" id="newUserBtn" class="enter-btn">Registrarse</button>
            <p class="text">O inicia sesión con Google:</p>
            <button id= "googleBtn"class="google"><img src="img/google.png"></button>

        </form>
    </div>`;

    registerTemplate.innerHTML = viewSignUp;

    const newUserBtn = registerTemplate.querySelector('#newUserBtn');
    newUserBtn.addEventListener('click', () => {
        // Ingresar con cuenta nueva
        const email = document.getElementById('new-email').value;
        const password = document.getElementById('new-password').value;
        register(email, password);
    });

    // Botón google
    const googleBtn = registerTemplate.querySelector('#googleBtn');
    googleBtn.addEventListener('click', (e) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        e.preventDefault();
        // Ingresar con cuenta google
        googleLogin(provider);
    });

    return registerTemplate;
};