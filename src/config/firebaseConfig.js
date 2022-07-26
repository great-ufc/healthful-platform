// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmU35vDMmqfac0hJmndkOpzcC4Kp-idPo",
  authDomain: "qolmonitor.firebaseapp.com",
  projectId: "qolmonitor",
  storageBucket: "qolmonitor.appspot.com",
  messagingSenderId: "202065532022",
  appId: "1:202065532022:web:bb625912fa06264b563b57",
  measurementId: "G-6TS64QEDYE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseApp