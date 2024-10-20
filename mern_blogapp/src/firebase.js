// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blogapp-f0f17.firebaseapp.com",
  projectId: "mern-blogapp-f0f17",
  storageBucket: "mern-blogapp-f0f17.appspot.com",
  messagingSenderId: "894909246425",
  appId: "1:894909246425:web:b18ed7478bee0e20aa47c8",
  measurementId: "G-SED5WWBB1P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);