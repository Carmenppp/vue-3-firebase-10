// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsY-Mf-oezaXOsMqaF7F5y2kUBzutW2PQ",
  authDomain: "vue-3-2023-856dd.firebaseapp.com",
  projectId: "vue-3-2023-856dd",
  storageBucket: "vue-3-2023-856dd.appspot.com",
  messagingSenderId: "381333779988",
  appId: "1:381333779988:web:aac3940724367a35be9901"
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };