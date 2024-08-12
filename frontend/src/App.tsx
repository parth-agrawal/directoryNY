import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import PeopleListingSection from "./components/pages/PeopleListingSection";

export default function App() {
  return (
    <header>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      <div className="bg-grid-blue-300/[0.2]">
        <PeopleListingSection />
      </div>
    </header>
  );
}
