// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDek7P4pJ7UncI9DC7w-idURVtpTU_fTnA",
  authDomain: "dragon-news-22196.firebaseapp.com",
  projectId: "dragon-news-22196",
  storageBucket: "dragon-news-22196.firebasestorage.app",
  messagingSenderId: "714656323085",
  appId: "1:714656323085:web:96ed635a86800eecc62744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app