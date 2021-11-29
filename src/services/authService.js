import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../config/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const signUp = (navigate, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/");
    })
    .catch((error) => {
      alert(error.code);
    });
};

export const signIn = (navigate, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("home");
    })
    .catch((error) => {
      alert(error.code);
    });
};
