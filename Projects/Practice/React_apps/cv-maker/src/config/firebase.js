// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2OHc8a8viI9Wvj4oSrpqhXK2ekBYzw68",
    authDomain: "cvmaker-102e9.firebaseapp.com",
    databaseURL: "https://cvmaker-102e9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cvmaker-102e9",
    storageBucket: "cvmaker-102e9.appspot.com",
    messagingSenderId: "736225184337",
    appId: "1:736225184337:web:3f51140f6f59aeb49f8670"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);