// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDtcKNwEiAQvnZCg6GBpdcTynHyaMbcjA",
  authDomain: "auth-firebase-context-ta-a1316.firebaseapp.com",
  projectId: "auth-firebase-context-ta-a1316",
  storageBucket: "auth-firebase-context-ta-a1316.appspot.com",
  messagingSenderId: "331157559214",
  appId: "1:331157559214:web:b66c4d7f33c59079241a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app