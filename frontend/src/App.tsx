import { CreateSpaceListingArea } from "./components/compound/CreateSpaceListingArea";
import NavBar from "./components/compound/NavBar/NavBar";

import PeopleListingSection from "./components/pages/PeopleListingSection";

import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import SignInButton from "./Test";
// import UserComponent from "./UserComponent";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByXZ0VmZQ8Vw2eq6tdv3uZY_PEcJoAYew",
  authDomain: "directoryny-5176e.firebaseapp.com",
  projectId: "directoryny-5176e",
  storageBucket: "directoryny-5176e.appspot.com",
  messagingSenderId: "535582826977",
  appId: "1:535582826977:web:04b7a579c96e99c66672a0",
  measurementId: "G-9FDQYJECWD",
};

function ContactMe({
  phone,
  email,
  twitter,
}: {
  phone: string;
  email: string;
  twitter: string;
}) {
  console.log("contact me");
  return (
    <>
      <div>Hello contact</div>
      <button
        aria-haspopup="dialog"
        className="bg-[#1D462F] text-white rounded-3xl ring-offset-white font-semibold p-2 text-xs"
      >
        Contact me
      </button>
    </>
  );
}

// Initialize Firebase
export default function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.languageCode = "it";
  console.log(auth);
  console.log(app);

  return (
    <header>
      <div>
        <NavBar />
      </div>
      <div className="bg-grid-blue-300/[0.2]">
        <PeopleListingSection />
      </div>
    </header>
  );
}
