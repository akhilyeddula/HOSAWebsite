// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVfvgymhy1csWBT6LttyS_O9ZqB7A--yI",
  authDomain: "hosa-website-5c4b1.firebaseapp.com",
  projectId: "hosa-website-5c4b1",
  storageBucket: "hosa-website-5c4b1.appspot.com",
  messagingSenderId: "716398613387",
  appId: "1:716398613387:web:ec1e6f029c7a686314d58e",
  measurementId: "G-YMYTYS94RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);