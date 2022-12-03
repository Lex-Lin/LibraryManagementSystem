import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUxCziWID8QHH8wShG-FFw_vCeh5GMyUg",
    authDomain: "notes-aab91.firebaseapp.com",
    databaseURL: "https://notes-aab91-default-rtdb.firebaseio.com",
    projectId: "notes-aab91",
    storageBucket: "notes-aab91.appspot.com",
    messagingSenderId: "486619012414",
    appId: "1:486619012414:web:ddd1aa2859b3316716206f",
    measurementId: "G-Y6623JJ8MX"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}