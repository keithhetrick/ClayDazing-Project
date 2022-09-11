// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzrMLo93byAdLyXvnq77cm0fSTMd-eTkU",
  authDomain: "clay-dazing.firebaseapp.com",
  projectId: "clay-dazing",
  storageBucket: "clay-dazing.appspot.com",
  messagingSenderId: "505203186229",
  appId: "1:505203186229:web:b316f2f628233f655aef7c",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
