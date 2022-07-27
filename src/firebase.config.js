import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOLGWxt3_28mIJyc1hDB-En1u08airtUE",
  authDomain: "space-tourism-17cb6.firebaseapp.com",
  projectId: "space-tourism-17cb6",
  storageBucket: "space-tourism-17cb6.appspot.com",
  messagingSenderId: "977325559887",
  appId: "1:977325559887:web:8ff07b2237a35cca061a3a",
  measurementId: "G-4HH0FTC5J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;