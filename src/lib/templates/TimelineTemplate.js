// Aquí van las publicaciones de timeline o muro principal

export const timeLine = () => {
  const viewTimeLine = `
    <div id="screen-two" class="screen2">
        <header>
            <h1 class="titleHeader">NeighTalk</h1>
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
        <input type=text></input>
        <div>
            <footer class="footer">
                <span class="material-icons">home</span>
                <span class="material-icons">search</span>
                <span class="material-icons">account_circle</span>
            </footer>
        </div>
    </div>`;
  return viewTimeLine;
};
