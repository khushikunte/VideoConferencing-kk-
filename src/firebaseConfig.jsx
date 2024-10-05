// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcpUl3-RFRElAicUfZgzO0FPItTTPCNxA",
  authDomain: "video-conferencing-8e1b7.firebaseapp.com",
  projectId: "video-conferencing-8e1b7",
  storageBucket: "video-conferencing-8e1b7.appspot.com",
  messagingSenderId: "626640928905",
  appId: "1:626640928905:web:6ffc87321bff2be2240658",
  measurementId: "G-DPMQ01LFR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);