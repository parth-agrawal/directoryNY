import SpaceListingService from "../../lib/services/Space-Listing/service";
import { useState } from "react";
import { UserListingDisplayData } from "../../lib/services/User-Listing/types";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactMe from "../helper/ContactMe";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

function DescriptionBoxPopup({
  onClose,
  description,
}: {
  onClose: (value: boolean) => void;
  description: string;
}) {
  return (
    <Dialog open={true} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-white bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0 h-screen">
          <DialogPanel
            transition
            className="h-4/6 relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 p-8 border border-gray-200"
          >
            <div className="font-light">
              <div className="font-bold">About</div>
              <div>{description}</div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default function UserListing({
  UserListingData,
}: {
  UserListingData: UserListingDisplayData;
}) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsDescriptionOpen(true); // Function to open the modal
  };

  const closeModal = () => {
    setIsDescriptionOpen(false); // Function to close the modal
  };

  return (
    <>
      {isDescriptionOpen && (
        <DescriptionBoxPopup
          onClose={closeModal}
          description={UserListingData.description}
        />
      )}
      <div className="p-4 bg-[#FFFDF3] rounded-2xl flex flex-col border-[1px] max-w-1/3 child-inherit-bg">
        <div className="flex items-center justify-between bg-inherit">
          <img
            className="rounded-full w-20 h-20 lg:w-28 lg:h-28 undefined mb-2"
            alt="User profile image"
            src={UserListingData.User.profilePicture}
          />

          <div className="flex flex-col items-center max-w-[60%] bg-inherit">
            <span className="font-semibold">
              {UserListingData.User.displayName}
            </span>
            {/* twitter handle with icon */}
            <a
              href={`https://twitter.com/${UserListingData.User.twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center text-blue-500 text-xs md:text-sm mb-2 hover:underline"
            >
              {UserListingData.User.twitterHandle}
              <span className="text-blue-500 ml-0.5">
                <TwitterIcon fontSize="small" />
              </span>
            </a>
            <ContactMe
              phone={UserListingData.phone}
              email={UserListingData.email}
              twitter_url={undefined}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <button
            onClick={openModal}
            className="rounded-xl text-xs p-2 bg-[#F6F5EB] my-1 text-slate-600 line-clamp-3 text-ellipsis pb-[0.14em] text-left"
          >
            {UserListingData.description}
          </button>
          {/* <div className="flex flex-row gap-2"> */}
          <div className="text-xs md:text-sm bg-inherit">
            <div className="bg-inherit">
              <span className="text-xs md:text-sm font-semibold mr-1 bg-inherit">
                Preference
              </span>
              <span className="text-xs md:text-sm">
                {UserListingData.leaselength}
              </span>
            </div>
            <div>
              <span className="text-xs md:text-sm font-semibold mr-1 ">
                Moving
              </span>{" "}
              <span className="text-xs md:text-sm">
                {UserListingData.moveInTime}
              </span>
            </div>
            <div>
              <div className="flex flex-row items-center">
                {UserListingData.User.referredByUser && (
                  <>
                    <span className="text-xs md:text-sm font-semibold mr-1">
                      Referred by
                    </span>
                    <a
                      href={`https://twitter.com/${UserListingData.User.referredByUser.twitterHandle}`}
                      className="flex items-center"
                    >
                      <img
                        className="rounded-full w-7 h-7 undefined"
                        alt="Referrer profile image"
                        src={UserListingData.User.referredByUser.profilePicture}
                      />
                      <span className="text-blue-500 hover:text-blue-400 m-1 text-xs">
                        {UserListingData.User.referredByUser.displayName}
                      </span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
