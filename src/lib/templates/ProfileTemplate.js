// Pantalla de perfil usuario

export const profile = () => {
    const divProfile = document.createElement('div');
    const viewProfile = `
<div id="profile-screen" class="screen2">
        <header>
            <img class="titleHeader" src="img/neightalk2.png">
        </header>
        <!-- Menu desplegable-->
        <div id="sidebar" class="hidden">
            <div id="menuBtn" class="toggle-btn">
                <span>&#9776;</span>
            </div>
            <div>
                <ul>
                    <li>
                        <img src="img/neightalk.png" class="menu">
                    </li>
                    <li><a href="#/TimelineTemplate">Inicio</a></li>
                    <li>Amigos</li>
                    <li><a href="#/">Cerrar Sesión</a></li>
            </div>
        </div>
<div class="profile">
        <div class="profile-picture"></div>
        <div class="user-name"></div>
        <div class="user-bio">Aquí puedes escribir algo sobre ti...</div>
        <button type="button" class="editBtn">Editar perfil</button>
    </div>`;

    divProfile.innerHTML = viewProfile;

    // MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
    function showSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    }
    const toggle = divProfile.querySelector('.toggle-btn');
    toggle.addEventListener('click', () => {
        showSidebar();
    });

    const auth = firebase.auth();
    const showPhoto = divProfile.querySelector('.profile-picture');
    const showName = divProfile.querySelector('.user-name');
    auth.onAuthStateChanged(user => {
        if (user) {
            showName.innerHTML = `<p>${user.displayName ? user.displayName : user.email}</p>`;
            showPhoto.innerHTML = `<img src=${user.photoURL ? user.photoURL : "img/icon.png"} class="profilePicture"></img>`;
        } else {
            showName.innerHTML = '';
        }
    });

    return divProfile;
};