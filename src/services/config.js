// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-75910-55c57.firebaseapp.com",
  projectId: "final-75910-55c57",
  storageBucket: "final-75910-55c57.firebasestorage.app",
  messagingSenderId: "832948618094",
  appId: "1:832948618094:web:9815295bf6862e3d08377f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)