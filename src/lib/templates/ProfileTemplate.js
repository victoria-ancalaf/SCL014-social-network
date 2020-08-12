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
                    <li>Cerrar Sesión</li>
            </div>
        </div>
<div class="profile">
        <div class="profile-picture"></div>
        <div class="user-name">Ada Lovelace</div>
        <div class="user-bio"></div>
        <button type="button" class="editBtn">Editar perfil</button>
        <footer class="footer">
            <span class="material-icons">home</span>
            <span class="material-icons">search</span>
            <span class="material-icons"><a href="#/ProfileTemplate">account_circle</a></span>
        </footer>
    </div>`

    divProfile.innerHTML = viewProfile;
    // MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)

    function showSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    }
    const toggle = divProfile.querySelector('.toggle-btn');
    toggle.addEventListener('click', () => {
        showSidebar();
    });

    return divProfile;
};