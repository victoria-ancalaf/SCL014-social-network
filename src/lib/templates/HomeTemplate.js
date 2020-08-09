// Aquí la pantalla de inicio de sesión

export const logIn = () => {
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
            <p id="register" class="register-btn">O <a href ="#/RegisterTemplate>regístrate.</a></p>
        </main>
    </div>`;
  return viewLogIn;
};
