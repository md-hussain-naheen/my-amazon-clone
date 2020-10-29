import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4BPb5TBHZqEbaRAjuquY_150bGfsGvG0",
  authDomain: "clone-fca93.firebaseapp.com",
  databaseURL: "https://clone-fca93.firebaseio.com",
  projectId: "clone-fca93",
  storageBucket: "clone-fca93.appspot.com",
  messagingSenderId: "741440026272",
  appId: "1:741440026272:web:265325d22520c90e4bbbc5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };