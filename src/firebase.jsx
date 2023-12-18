// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDzr4bWF1djMOnUhNaHVCf7OmE3pTLYuy0",
  authDomain: "delgoshopauth.firebaseapp.com",
  projectId: "delgoshopauth",
  storageBucket: "delgoshopauth.appspot.com",
  messagingSenderId: "1078191373163",
  appId: "1:1078191373163:web:da4d27bdc97892401fea2e",
  measurementId: "G-8Y5LM3WLQK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);