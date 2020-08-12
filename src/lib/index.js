// aqui exportaras las funciones que necesites
/*  export const myFunction = () => {
 
};  */
// Ingresar con cuenta registrada
export function loginApp(eMail, password1) {
    firebase.auth().signInWithEmailAndPassword(eMail, password1)
        .then(user => {
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
                    alert('Email incorrecto.');
                    break;
                case 'auth/user-not-found':
                    alert('Usuario no encontrado.');
                    break;
                case 'auth/wrong-password':
                    alert('Contraseña incorrecta.');
                    break;
                default:
                    alert(errorMessage);
            };
        });
};

// Crear una cuenta nueva

export function register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
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
                    alert('Email en uso.');
                    break;
                case 'auth/invalid-email':
                    alert('Email inválido.');
                    break;
                case 'auth/weak-password':
                    alert('La contraseña es demasiado débil.');
                    break;
                default:
                    alert(errorMessage);
            };
        });
};


// Ingresar con cuenta Google
export function googleLogin(provider) {
    firebase.auth().signInWithPopup(provider)
        .then(user => {
            if (user != null) {
                window.location.hash = '#/TimelineTemplate';
            } else {
                window.location.hash = '#/';
            }
        })
};