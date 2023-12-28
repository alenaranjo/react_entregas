// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-zMK1p0r9vo9MNIWnD4hZfinR7PLjIhg",
  authDomain: "c49870-alenaranjo.firebaseapp.com",
  projectId: "c49870-alenaranjo",
  storageBucket: "c49870-alenaranjo.appspot.com",
  messagingSenderId: "437770448675",
  appId: "1:437770448675:web:7bf80fd8dbc329cc526696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnect = ()=> app