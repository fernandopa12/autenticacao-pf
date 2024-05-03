import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyClDMDiRP3go0grCIDpSV7t4dFVukmHMCg",
  authDomain: "autenticacao-pf-6d79b.firebaseapp.com",
  projectId: "autenticacao-pf-6d79b",
  storageBucket: "autenticacao-pf-6d79b.appspot.com",
  messagingSenderId: "437527218712",
  appId: "1:437527218712:web:3c2787af2f9644e484916d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)