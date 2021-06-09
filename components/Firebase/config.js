import app from 'firebase/app';
import firebase from "firebase"
export const config = {
    apiKey: "AIzaSyDXRKh0PVgKQwT-D_70rzCL0kJDuuZtf9I",
    authDomain: "bloques-gutenberg.firebaseapp.com",
    databaseURL: "https://bloques-gutenberg-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bloques-gutenberg",
    storageBucket: "bloques-gutenberg.appspot.com",
    messagingSenderId: "609550714503",
    appId: "1:609550714503:web:729d93a7d0e801771d5a22"
};

if (!firebase.apps.length) {
    app.initializeApp(config);
}
//firebase.initializeApp(config);
export const auth = app.auth();
export const db = app.database();
