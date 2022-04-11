// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNDh3PxyYX1om0SpyMsLVb4OnZ0rOpwg4",
  authDomain: "personalwebpagefirebase.firebaseapp.com",
  databaseURL: "https://personalwebpagefirebase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personalwebpagefirebase",
  storageBucket: "personalwebpagefirebase.appspot.com",
  messagingSenderId: "798387641272",
  appId: "1:798387641272:web:719d67b16addb05d5ccd4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database= getDatabase(app)