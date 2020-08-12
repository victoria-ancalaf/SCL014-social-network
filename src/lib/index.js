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
