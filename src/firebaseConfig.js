// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmP_39oVZB15Wm4QO8OUo4AdIPQQEDA0M",
  authDomain: "ecommerce-ee26e.firebaseapp.com",
  projectId: "ecommerce-ee26e",
  storageBucket: "ecommerce-ee26e.appspot.com",
  messagingSenderId: "937131081412",
  appId: "1:937131081412:web:2d78c4e580acaf54a19391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)