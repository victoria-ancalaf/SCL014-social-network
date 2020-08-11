//Aquí la pantalla de registro
import {
    register,
    googleLogin,
} from '../index.js';

export const signUp = () => {
    const registerTemplate = document.createElement('div');
    const viewSignUp = `
    <div id="register-screen" class="login-2page">
        <aside class="second-aside"></aside>
        <main class="user-login">
            <img src="img/neightalk.png" class="logo"></img>
            <label for="email"></label>
            <input type="email" id="new-email" class="log-input" placeholder="Correo electrónico"></input>
            <label for="password"></label>
            <input type="password" id="new-password" class="log-input" placeholder="Contraseña"></input>
            <button type="button" id="newUserBtn" class="enter-btn">Registrarse</button>
            <p class="text">O inicia sesión con Google:</p>
            <button id= "googleBtn"><img src="img/google.png" class="google" class="enter-btn"></button>

        </main>
    </div>`
    registerTemplate.innerHTML = viewSignUp;
    const newUserBtn = registerTemplate.querySelector('#newUserBtn');
    console.log(newUserBtn)
    newUserBtn.addEventListener('click', () => {
            console.log('se hizo click al botón');
            // Ingresar con cuenta registrada
            const email = document.getElementById('new-email').value;
            const password = document.getElementById('new-password').value;
            console.log(email, password);
            register(email, password);
        })
        //Botón google
    const googleBtn = registerTemplate.querySelector('#googleBtn');
    googleBtn.addEventListener('click', () => {
        // Ingresar con cuenta google
        googleLogin();
    })

    return registerTemplate;
};