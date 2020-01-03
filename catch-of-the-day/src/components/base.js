import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_vKif2RJaeSTohxRhiXZRhUwuLQ89IwU",
    authDomain: "catch-of-the-day-diego-72674.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-diego-72674.firebaseio.com",
    projectId: "catch-of-the-day-diego-72674",
    storageBucket: "catch-of-the-day-diego-72674.appspot.com",
    messagingSenderId: "629892358497",
    appId: "1:629892358497:web:67f05c5ab32bb58e0ca520",
    measurementId: "G-BXN9NM1EJN"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
