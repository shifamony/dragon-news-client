// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeqxJ24urmwb-f5JueGGoZlaJBELUD8BE",
  authDomain: "dragon-news-client-81b67.firebaseapp.com",
  projectId: "dragon-news-client-81b67",
  storageBucket: "dragon-news-client-81b67.appspot.com",
  messagingSenderId: "286370684047",
  appId: "1:286370684047:web:559e91bddd0a09d586e4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;