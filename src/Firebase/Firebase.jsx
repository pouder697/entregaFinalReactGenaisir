
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQMl_azaTtNBVZ73IrbYuC3NRe6ZWKRRI",
  authDomain: "entrega-final-reactjs-genaisir.firebaseapp.com",
  projectId: "entrega-final-reactjs-genaisir",
  storageBucket: "entrega-final-reactjs-genaisir.appspot.com",
  messagingSenderId: "584475486570",
  appId: "1:584475486570:web:218f0c5b869873faffdd13"
};

// Inicialización Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);