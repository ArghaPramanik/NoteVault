import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:"AIzaSyBT6cXi_Tzm7OO4jM5MU7VG_K8XfqI4Imo",
  authDomain:"noteapp-aa75f.firebaseapp.com",
  projectId: "noteapp-aa75f",
  storageBucket:"noteapp-aa75f.firebasestorage.app",
  messagingSenderId:"753210378666",
  appId:"1:753210378666:web:5aac9c10356c774fe303d3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

