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
        <div class="user-bio"></div>
        <button type="button" class="editBtn">Editar perfil</button>
        <footer class="footer">
        <img src="img/search.png" class="icons">
        <input id= "search" type="search" class="searchBar" placeholder="Busca tu comuna..." autocomplete="off">
        </footer>
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
    const showName = divProfile.querySelector('.user-name');
    auth.onAuthStateChanged(user => {
        if (user) {
            showName.innerHTML = `<p>${user.displayName}</p>`;
        } else if (user) {
            showName.innerHTML = `<p>${user.email}</p>`;
        } else {
            showName.innerHTML = '';
        }
    });

    return divProfile;
};