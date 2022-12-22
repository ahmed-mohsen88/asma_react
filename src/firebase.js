// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// var storage = require('@google-cloud/storage')

// import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAEk1IotaW1w_orAw__YUUtLCbbPzT1B7I",
  authDomain: "disney-clone-34b1b.firebaseapp.com",
  projectId: "disney-clone-34b1b",
  storageBucket: "disney-clone-34b1b.appspot.com",
  messagingSenderId: "797585019092",
  appId: "1:797585019092:web:7e5a738231b8dd5aa3eb41",
  measurementId: "G-WJ1R0S4WPF",
};

// Initialize Firebase
const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;
