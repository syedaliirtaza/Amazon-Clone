import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLtms_goCYBvrvdyy1BLyOeOWXqbCH97k",
  authDomain: "clone-38ccf.firebaseapp.com",
  databaseURL: "https://clone-38ccf.firebaseio.com",
  projectId: "clone-38ccf",
  storageBucket: "clone-38ccf.appspot.com",
  messagingSenderId: "822353029281",
  appId: "1:822353029281:web:829ddd0feba7a0e16068e0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
