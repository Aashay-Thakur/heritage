// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQnf1RVKCpGx20xFAwZ6LEn2OliFUqQUk",
    authDomain: "heritage-2f70c.firebaseapp.com",
    projectId: "heritage-2f70c",
    storageBucket: "heritage-2f70c.appspot.com",
    messagingSenderId: "534696751781",
    appId: "1:534696751781:web:cb427ba93f9c9ef44a934c",
    measurementId: "G-8D1N4JFWWH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
