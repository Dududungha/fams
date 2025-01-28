import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTC9kPtZhsHqudfWceUMXiSGEJH2gO7Os",
    authDomain: "fams-59f60.firebaseapp.com",
    projectId: "fams-59f60",
    storageBucket: "fams-59f60.firebasestorage.app",
    messagingSenderId: "254174914173",
    appId: "1:254174914173:web:b2fdf762497ad6c490b314",
    measurementId: "G-XQG2TVSHRK"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };