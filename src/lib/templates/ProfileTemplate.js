// Pantalla de perfil usuario

export const profile = () => {
    const viewProfile = `
<section id="profile-screen" class="profile">
        <header>
        </header>
        <!-- Menu desplegable-->
         <div id="sidebar" class="active">
            <div id="menuBtn" class="toggle-btn">
                <span>&#9776;</span>
            </div>
            <div>
                <ul>
                    <li>
                        <img src="img/neightalk.png" class="menu">
                    </li>
                    <li>Perfil</li>
                    <li>Amigos</li>
                    <li>Cerrar Sesión</li>
            </div>
        </div> 

        <div class="profile-picture"></div>
        <div class="user-name">Ada Lovelace</div>
        <div class="user-bio"></div>
        <button type="button" class="editBtn">Editar perfil</button>
        <footer class="footer">
            <span class="material-icons">home</span>
            <span class="material-icons">search</span>
            <span class="material-icons">account_circle</span>
        </footer>
    </section>`;
    return viewProfile;
};