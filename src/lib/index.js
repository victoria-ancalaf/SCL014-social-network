// aqui exportaras las funciones que necesites
/*  export const myFunction = () => {
 
};  */
// Ingresar con cuenta registrada
export function loginApp(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(resp => {
            loginPage.style.display = 'none';
            screenTwo.style.display = 'flex';
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
export function register(email, password, registerPage, screenTwo) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(resp => {
            registerPage.style.display = 'none';
            screenTwo.style.display = 'flex';
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
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;

    })
};