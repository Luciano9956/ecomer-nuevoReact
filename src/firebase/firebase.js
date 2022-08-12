
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeZpwVe-7hOjFA3_LzHEt00SA3nX_6zS4",
  authDomain: "tienda-arcadehard.firebaseapp.com",
  projectId: "tienda-arcadehard",
  storageBucket: "tienda-arcadehard.appspot.com",
  messagingSenderId: "535125363046",
  appId: "1:535125363046:web:6d6597bbf54acd86c4e0a7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);