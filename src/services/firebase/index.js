// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBixZT_GFhYcqYCtzSdkSSeeauHU4o-Xyc",
  authDomain: "e-commerce-prueba-ab405.firebaseapp.com",
  projectId: "e-commerce-prueba-ab405",
  storageBucket: "e-commerce-prueba-ab405.appspot.com",
  messagingSenderId: "427734879329",
  appId: "1:427734879329:web:283f2b1989cfb9946eae20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
