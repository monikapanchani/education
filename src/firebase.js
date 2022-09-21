// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGaeNbLJsiRV5y2Ysoe7jlo5JcuFbN2C8",
  authDomain: "education-db877.firebaseapp.com",
  projectId: "education-db877",
  storageBucket: "education-db877.appspot.com",
  messagingSenderId: "461651790203",
  appId: "1:461651790203:web:ceae085ca942a88f3b55de",
  measurementId: "G-JRLMDFCFY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
