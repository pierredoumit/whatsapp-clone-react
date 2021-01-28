import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbdhdD1igHAP_dyEj9wespaLbS-3MTB_4",
    authDomain: "whatsapp-react-91b31.firebaseapp.com",
    databaseURL: "https://whatsapp-react-91b31.firebaseio.com",
    projectId: "whatsapp-react-91b31",
    storageBucket: "whatsapp-react-91b31.appspot.com",
    messagingSenderId: "942378298723",
    appId: "1:942378298723:web:23909f5d9783085aaa3756"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;