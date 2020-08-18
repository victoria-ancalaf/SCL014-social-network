// eslint prefer-arrow-callback: 0


// Ingresar con cuenta registrada
export function loginApp(eMail, password1) {
    firebase.auth().signInWithEmailAndPassword(eMail, password1)
        .then((user) => {
            if (user != null) {
                window.location.hash = '#/TimelineTemplate';
            } else {
                window.location.hash = '#/';
            }
        })
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (errorCode) {
                case 'auth/invalid-email':
                    alert('Email incorrecto.'); // eslint-disable-line no-alert
                    break;
                case 'auth/user-not-found':
                    alert('Usuario no encontrado.'); // eslint-disable-line no-alert
                    break;
                case 'auth/wrong-password':
                    alert('Contraseña incorrecta.'); // eslint-disable-line no-alert
                    break;
                default:
                    alert(errorMessage); // eslint-disable-line no-alert
            }
        });
}


// Crear una cuenta nueva
export function register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            if (user != null) {
                window.location.hash = '#/TimelineTemplate';
            } else {
                window.location.hash = '#/';
            }
        })
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    alert('Email en uso.'); // eslint-disable-line no-alert
                    break;
                case 'auth/invalid-email':
                    alert('Email inválido.'); // eslint-disable-line no-alert
                    break;
                case 'auth/weak-password':
                    alert('La contraseña es demasiado débil.'); // eslint-disable-line no-alert
                    break;
                default:
                    alert(errorMessage); // eslint-disable-line no-alert
            }
        });
}


// Ingresar con cuenta Google

export function googleLogin(provider) {

    firebase.auth().signInWithPopup(provider)
        .then((user) => {
            if (user != null) {
                window.location.hash = '#/TimelineTemplate';
            } else {
                window.location.hash = '#/';
            }
        });
}


// Publicar en el Timeline

export const timelinePost = (inputTitle, inputPost) => {
    const db = firebase.firestore();
    const userNt = () => firebase.auth().currentUser;
    const user = userNt();
    const datePost = new Date();
    db.collection('post').add({
            name: user.displayName,
            uid: user.uid,
            email: user.email,
            title: inputTitle,
            content: inputPost,
            fecha: datePost.toLocaleString(),
        })
        .then(function(docRef) {
            console.log("Documento publicado con el ID: ", docRef.id);
            document.getElementById('titleInput').value = '';
            document.getElementById('txtArea').value = '';
        })
        .catch(function(error) {
            console.error("Hubo un error a publicar: ", error);

        });

}

export const timelineRead = () => {
    const db = firebase.firestore();
    db.collection('post').orderBy('fecha', 'desc').onSnapshot((querySnapshot) => {
        const show = document.getElementById('outputPost');
        show.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const showPostInTimeline =
                `<div class="posted">
            <div class="userInfoPost">
            ${doc.data().name? doc.data().name : doc.data().email}
            </div>
            <div class="userPost">
                <p class="comuna">${doc.data().title}</p>
                <p class="publicacion">${doc.data().content}</p>
                <p class="publicacionid">${doc.id}</p>
                <p class="publicacion">${doc.data().fecha}</p>
                <div class="postIcons">
                <button id="like" class="likeBtn"><img src="img/heart.png" class="heart"></button><p class="showLike" id="showLike"></p>
                <button type="button" id="${doc.id}" class="deleteBtn">Eliminar</button>
                <button type="button" id="updateBtn">Editar</button>
                </div>    
            </div>
        </div>`;
            show.innerHTML += showPostInTimeline;


            const pressLike = () => {
                if (typeof(Storage) !== "undefined") {
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount) + 1;
                    } else {
                        localStorage.clickcount = 1;
                    }
                    document.getElementById("showLike").innerHTML = localStorage.clickcount;
                } else {
                    document.getElementById("showLike").innerHTML = "Tu navegador no soporta web storage";
                }

            }

            const like = document.querySelector('#like');
            like.addEventListener('click', () => {
                pressLike();
            });

            const botones = document.querySelectorAll('.deleteBtn');
            botones.forEach((btn) => {
                btn.addEventListener('click', (event) => {
                    const confirmar = confirm("¿Estás seguro que quieres borrar este post?");
                    if (confirmar === true) {
                        const borrarPost = event.target.id;
                        erasePost(borrarPost);
                    }
                })
            })

            const erasePost = (id) => {
                firebase.firestore().collection("post").doc(id).delete()
                    .then(function() {
                        console.log("Post borrado exitosamente!");
                    }).catch(function(error) {
                        console.error("Ha ocurrido un error al borrar tu post: ", error);
                    });
            };

        });
    })
}

export const showAllPost = () => {
    const db = firebase.firestore();
    db.collection("post").where("title", "==", "hola")
        .onSnapshot(function(querySnapshot) {
            var posts = [];
            querySnapshot.forEach(function(doc) {
                posts.push(doc.data().name ? doc.data().name : doc.data().email &&
                    doc.data().uid && doc.data().email && doc.data().title && doc.data().content);
            });
        });
}