firebase.initializeApp({
    apiKey: 'AIzaSyCrQH1uj-GPk4mD2BKmuG_INXuiZMX9vR8',
    authDomain: 'minisn-9e681.firebaseapp.com',
    projectId: 'minisn-9e681',
    storageBucket: 'minisn-9e681.appspot.com',
});

const reg = firebase.firestore();
const log = document.getElementById('iLogin').value;
const pass = document.getElementById('iPassword').value;

reg.collection('users').add({
    Login: log,
    Password: pass
});

location.href = 'users.html';
