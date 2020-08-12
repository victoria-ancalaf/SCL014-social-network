// Aquí van las publicaciones de timeline o muro principal

export const timeLine = () => {
  const feedWall = document.createElement('div');
  const viewTimeLine = `
    <div id="screen-two" class="screen2">
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
                    <li><a href="#/ProfileTemplate">Perfil</a></li>
                    <li>Amigos</li>
                    <li>Cerrar Sesión</li>
            </div>
        </div>
        <input type=text></input>
        <div>
            <footer class="footer">
                <span class="material-icons">home</span>
                <span class="material-icons">search</span>
                <span class="material-icons"><a href="#/ProfileTemplate">account_circle</a></span>
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

  return feedWall;
};
