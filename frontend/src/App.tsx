import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function UserComponent() {
  return (
    <>
      Hello
      <div className="p-6 bg-[#FFFDF3] rounded-2xl flex flex-col gap-4 border-[1px]">
        <div className="flex items-center justify-between gap-2">
          <img
            className="rounded-full w-28 h-28 lg:w-36 lg:h-36 undefined"
            alt="User profile image"
            src="https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg"
          />
          <div className="flex flex-col items-center max-w-[60%]">
            <span className="font-semibold">Luke Igel</span>
            <span>@lukeigel</span>
            <button className="bg-green-900 text-white rounded-3xl ring-offset-white font-semibold">
              Contact me
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" rounded-xl text-sm p-2 bg-[#F6F5EB]">
            I really like to eat pizza. I eat it all the time. Sometimes I eat
            it while I am driving. that is nice.
          </div>
          {/* <link href="google.com">google.com</link> */}
          {/* <div className="flex flex-row gap-2"> */}
          <div className="text-md">
            <div>
              <span className="font-medium mr-1">Preference</span>
              <span>Short-term lease, 1-2 roomies</span>
            </div>
            <div>
              <span className="font-medium mr-1">Moving</span> <span>ASAP</span>
            </div>
            <div>
              <div>
                <span className="font-medium mr-1">Referred by</span>
                <a
                  href="https://x.com/thomasschulzz"
                  className="flex items-center"
                >
                  <img
                    className="rounded-full w-7 h-7 undefined"
                    alt="User profile image"
                    src="https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg"
                  />
                  <span className="text-blue-500 hover:text-blue-400">
                    Thomas Schulz
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <div className="flex flex-row bg-[#FEFBEB]">
        <button className="no-underline rounded-md py-1.5 px-3 text-[#474747] border border-[#cccccc]  hover:bg-[#f1efdf]">
          People
        </button>
        <button className="no-underline rounded-md py-1.5 px-3 font-bold text-[#1d462f] border-2 hover:border-[#1d462f] bg-transparent hover:bg-[#e7e9d8]">
          Rooms
        </button>

        <UserComponent />
      </div>
    </header>
  );
}
