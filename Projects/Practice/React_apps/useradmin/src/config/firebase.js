import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa7dqojDyvunWVXmAuHQPzXb0MMSvvCMo",
    authDomain: "useradmin-21325.firebaseapp.com",
    databaseURL:"https://useradmin-21325-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "useradmin-21325",
    storageBucket: "useradmin-21325.appspot.com",
    messagingSenderId: "623088938920",
    appId: "1:623088938920:web:cc601b78a00b6634f6779d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getDatabase(app)