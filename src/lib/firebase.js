// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkI-eVg7mOMzAMjMd7t-SGKTD7DCIraZg",
  authDomain: "crypture-632b6.firebaseapp.com",
  projectId: "crypture-632b6",
  storageBucket: "crypture-632b6.firebasestorage.app",
  messagingSenderId: "450864263126",
  appId: "1:450864263126:web:c5ad53f73407e0ef107e77",
  measurementId: "G-Y2W17736PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, analytics, auth, storage };