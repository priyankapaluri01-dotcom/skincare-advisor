import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2VG2USQIGToud3_S1Xa7eOZSUIdQE65o",
  authDomain: "skincare-advisor-e9a82.firebaseapp.com",
  projectId: "skincare-advisor-e9a82",
  storageBucket: "skincare-advisor-e9a82.firebasestorage.app",
  messagingSenderId: "1079496191430",
  appId: "1:1079496191430:web:f8f1707d5ca50d974dd6c7",
  measurementId: "G-G91K93HYZP"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);