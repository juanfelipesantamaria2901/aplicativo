// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
//import auth from 'AplicativoRivera/aplicativo/node_modules/firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa_Ov5QUgqK1-Gv4pcbpMBy0UCmwEozp8",
  authDomain: "rivera-c82be.firebaseapp.com",
  projectId: "rivera-c82be",
  storageBucket: "rivera-c82be.appspot.com",
  messagingSenderId: "434694331363",
  appId: "1:434694331363:web:d5eed522dbb8f20a8a5ed6",
  measurementId: "G-0K0E679WD0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();