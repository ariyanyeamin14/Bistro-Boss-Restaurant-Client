// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDFV4eNDHNlvnFIntjm2bqtn6184BTW0g",
  authDomain: "bistro-boss-restaurant-ccd35.firebaseapp.com",
  projectId: "bistro-boss-restaurant-ccd35",
  storageBucket: "bistro-boss-restaurant-ccd35.firebasestorage.app",
  messagingSenderId: "1022098801976",
  appId: "1:1022098801976:web:f464324d765440943d6dcd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);