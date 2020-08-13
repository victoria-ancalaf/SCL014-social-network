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
        .catch(function error() {
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
        .catch(function error() {
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

    db.collection('post').add({
            name: user.displayName,
            uid: user.uid,
            email: user.email,
            title: inputTitle,
            content: inputPost,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}

export const timelineRead = () => {
    const db = firebase.firestore();
    db.collection('post').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const show = document.getElementById('outputPost');
            const showPostInTimeline =
                `<div class="posted">
            <div class="userInfoPost">
            ${doc.data().name? doc.data().name : doc.data().email}
            </div>
            <div class="userPost">
                <p class="comuna">${doc.data().title}</p>
                <p class="publicacion">${doc.data().content}</p>
            </div>
            <div class="postIcons">
            <button id="like" class="likeBtn"><img src="img/heart.png"></button>
            </div>
        </div>`;
            show.innerHTML += showPostInTimeline;
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