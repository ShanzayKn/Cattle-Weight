// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl2oqnvkOmvX2kxTRXoidZL3EE3hLQ0zM",
    authDomain: "cattle-weight-detection.firebaseapp.com",
    projectId: "cattle-weight-detection",
    storageBucket: "cattle-weight-detection.appspot.com",
    messagingSenderId: "86397276231",
    appId: "1:86397276231:web:cc35b5327098213bdaa162",
    measurementId: "G-EG94D5KZ6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
