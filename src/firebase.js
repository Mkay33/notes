import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_APP",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef12345"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);