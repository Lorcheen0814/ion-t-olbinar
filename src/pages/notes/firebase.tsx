// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM7B1Lgi5dzn4kL6gEle42eIIaHiUUShc",
  authDomain: "it35-olbinar.firebaseapp.com",
  projectId: "it35-olbinar",
  storageBucket: "it35-olbinar.appspot.com",
  messagingSenderId: "309194757546",
  appId: "1:309194757546:web:e4be0db1366024675807d3",
  measurementId: "G-E1RC4CJFH2"
};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}