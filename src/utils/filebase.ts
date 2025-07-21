// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClGzFg6dIRf9F2JBFDRFdroqZf1tgYNsI",
  authDomain: "nextjs-filebase-commerce.firebaseapp.com",
  projectId: "nextjs-filebase-commerce",
  storageBucket: "nextjs-filebase-commerce.firebasestorage.app",
  messagingSenderId: "12168007895",
  appId: "1:12168007895:web:906db01c9469ed2c2c6092",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// filestore
const db = getFirestore(app);

// storage

// authentication

export { db };
