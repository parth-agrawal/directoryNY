import { useState } from "react";

import SpaceListingModal from "../Modal/SpaceListingModal";// Adjust the import path
import { SpaceListing } from "../../../lib/services/Space-Listing/types";

interface SpaceBannerProps {
  onListingAdded: () => void;
  spaceListings: Array<SpaceListing>;
}

const SpaceBanner = ({ onListingAdded, spaceListings }: SpaceBannerProps) => {

  const mustEditListing: boolean = spaceListings.length > 0;


  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Function to open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Function to close the modal
  };



  return (
    <div className="flex flex-col p-4 border border-2 rounded-lg bg-bgGreen gap-2 mb-2">
      <div className="text-md lg:text-base font-bold">
        👋 Are you looking for housing?
      </div>
      <div className="text-sm lg:text-base ">
        Create a profile to be discovered by communities and organizers
      </div>
      <button
        className="bg-[#4CAF50] text-xs text-white p-3 rounded-3xl w-fit px-4"
        onClick={openModal}
      >
        {mustEditListing ? "Edit space listing" : "Add space listing"}
      </button>
      {isModalOpen && (
        <SpaceListingModal
          onClose={closeModal}
          onSubmitSuccess={onListingAdded}
          mustEditListing={mustEditListing}
        />
      )}
    </div>
  );
};

export default SpaceBanner;
