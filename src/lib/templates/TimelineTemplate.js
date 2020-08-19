import {
    timelinePost,
    timelineRead,
    showAllPost,
    // erasePost,
} from '../index.js'

// Aquí van las publicaciones de timeline o muro principal

export const timeLine = () => {
    const feedWall = document.createElement('div');
    const viewTimeLine = `
    <div id="screen-two" class="screen2">
        <header>
            <img class="titleHeader" src="img/neightalk2.png">
            <div id="showName"></div>
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
                    <li><a href="#/ProfileTemplate">Perfil</a></li>
                    <li>Amigos</li>
                    <li><a href="#/">Cerrar Sesión</a></li>
            </div>
        </div>
        <div class="myPost">
        <input type="text" id="titleInput" class="titleInput" placeholder="¿Dónde estás?"></input>
        <textarea type="textarea" id="txtArea" class="txt" placeholder="¿Qué está pasando?" style="overflow:hidden"></textarea>
        <button type="button" id="postBtn" class="btnPost">Postear</button>
        </div>
        <div id="outputPost" class="posts"></div>
        <div>
        <footer class="footer">
        <img src="img/search.png" class="icons">
        <input id= "search" type="search" class="searchBar" placeholder="Busca tu comuna..." autocomplete="off">
        </footer>
        </div>
    </div>`;

    feedWall.innerHTML = viewTimeLine;

    // MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
    function showSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    }
    const toggle = feedWall.querySelector('.toggle-btn');
    toggle.addEventListener('click', () => {
        showSidebar();
    });

    const auth = firebase.auth();
    const showName = feedWall.querySelector('#showName');
    auth.onAuthStateChanged(user => {
        if (user) {
            showName.innerHTML = `<h3>Hola ${user.displayName ? user.displayName : user.email}!! &#128513</h3>`;
            showAllPost();
        } else {
            showName.innerHTML = '';
        }
    });

    //Función para traer id de text area 
    feedWall.querySelector('#postBtn').addEventListener('click', () => {
        const inputTitle = document.getElementById('titleInput').value;
        const inputPost = document.getElementById('txtArea').value;
        timelinePost(inputTitle, inputPost);
    })

    timelineRead();


    //Barra de búsqueda

    // const searchBar = document.


    return feedWall;
};