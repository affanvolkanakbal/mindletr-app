// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8TY8QBzDRBYwl2VJKZkwVT_ty6JVFuIU",
  authDomain: "mindletr-app.firebaseapp.com",
  databaseURL: "https://mindletr-app-default-rtdb.europe-west1.firebasedatabase.app",  // BU SATIRI EKLE!
  projectId: "mindletr-app",
  storageBucket: "mindletr-app.firebasestorage.app",
  messagingSenderId: "627210136438",
  appId: "1:627210136438:web:6149064e9f467b941ae857",
  measurementId: "G-JPFE3GYJR3"  // Analytics açık, istersen sil
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);