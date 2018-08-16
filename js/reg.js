const config = {
    apiKey: "AIzaSyCrQH1uj-GPk4mD2BKmuG_INXuiZMX9vR8",
    authDomain: "minisn-9e681.firebaseapp.com",
    databaseURL: "https://minisn-9e681.firebaseio.com",
    projectId: "minisn-9e681",
    storageBucket: "minisn-9e681.appspot.com",
    messagingSenderId: "477516608540"
};

firebase.initializeApp(config);


function createAccount() {
    const email = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       const errorCode = error.code;
       const errorMessage = error.message;

       window.alert('Error : ' + errorMessage);
    });

    function Href() {
        location.href = 'users.html';
    }

    setTimeout(Href, 3000);
}


