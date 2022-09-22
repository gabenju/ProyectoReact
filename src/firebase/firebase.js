import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8v9RxBbAbPRxkDLbR168YpUwZvWsmgf0",
    authDomain: "myappreact-f8223.firebaseapp.com",
    projectId: "myappreact-f8223",
    storageBucket: "myappreact-f8223.appspot.com",
    messagingSenderId: "680217271553",
    appId: "1:680217271553:web:281fd2b9885f5d281b4f00"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)