import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB5eUdY_uyFsAiuBNKWtOXUFHWkw1Iq8qQ",
    authDomain: "useronboarding-b8651.firebaseapp.com",
    projectId: "useronboarding-b8651",
    storageBucket: "useronboarding-b8651.firebasestorage.app",
    messagingSenderId: "1060900125511",
    appId: "1:1060900125511:web:d05c0ecda401ed7bd9ea62",
    measurementId: "G-3NPN0S6HVF",
    databaseURL: "https://useronboarding-b8651-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;