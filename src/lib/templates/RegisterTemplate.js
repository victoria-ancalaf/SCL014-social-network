// Aquí la pantalla de registro

export const signUp = () => {
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
            <img src="img/google.png" class="google" id="googleBtn" class="enter-btn">

        </main>
    </div>`;
    return viewSignUp;
}