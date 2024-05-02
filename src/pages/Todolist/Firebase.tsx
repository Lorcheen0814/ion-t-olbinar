// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADoz8gG54DJGID5KdUjVaOhs22Flh54mE",
  authDomain: "ion-t-olbinar.firebaseapp.com",
  projectId: "ion-t-olbinar",
  storageBucket: "ion-t-olbinar.appspot.com",
  messagingSenderId: "396490993297",
  appId: "1:396490993297:web:b58aa3ef086a4ca7679930",
  measurementId: "G-S1FH4D1BL9"
};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}