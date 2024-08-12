// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import SignInButton from "./Test";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByXZ0VmZQ8Vw2eq6tdv3uZY_PEcJoAYew",
  authDomain: "directoryny-5176e.firebaseapp.com",
  projectId: "directoryny-5176e",
  storageBucket: "directoryny-5176e.appspot.com",
  messagingSenderId: "535582826977",
  appId: "1:535582826977:web:04b7a579c96e99c66672a0",
  measurementId: "G-9FDQYJECWD"
};

// Initialize Firebase
export default function App(
) {
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  auth.languageCode = 'it';
  console.log(auth)
  console.log(app)


  return (
    <header>

        <UserComponent />
   
    </header>
  );
}
