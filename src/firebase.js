import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB2VG2USQIGToud3_S1Xa7eOZSUIdQE65o",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "skincare-advisor-e9a82.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "skincare-advisor-e9a82",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "skincare-advisor-e9a82.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1079496191430",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1079496191430:web:f8f1707d5ca50d974dd6c7",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-G91K93HYZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;