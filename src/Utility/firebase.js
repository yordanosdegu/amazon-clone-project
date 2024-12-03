import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSGbVbIdNSJwttatsQr3Kno9jb6NvK_sA",
  authDomain: "clone-1f5ab.firebaseapp.com",
  projectId: "clone-1f5ab",
  storageBucket: "clone-1f5ab.firebasestorage.app",
  messagingSenderId: "40426939194",
  appId: "1:40426939194:web:4e24f568b57edcc90fe603",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()

