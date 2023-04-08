import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTtwlmQiHgC8G_gXoPvYL4bcOo1nutx0E",
  authDomain: "reactwithfirebase-c448f.firebaseapp.com",
  projectId: "reactwithfirebase-c448f",
  storageBucket: "reactwithfirebase-c448f.appspot.com",
  messagingSenderId: "817195755952",
  appId: "1:817195755952:web:0390a399b42cf420fa0e75",
  measurementId: "G-4Y3JMBXJXT"
};

const app=initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);