import { useEffect, useState } from "react";
import { UserService } from "../../../lib/services/Users/service";
import SpaceListingService from "../../../lib/services/Space-Listing/service";
import { SpaceListing } from "../../../lib/services/Space-Listing/types";
import { User } from "../../../lib/services/Users/types";
import { SpaceListingCreateForm } from "../SpaceListingCreateForm";

// const SpaceBanner = () => {
//   const userService = UserService();
//   const [userSpaceListings, setUserSpaceListings] = useState<SpaceListing[]>([]);
//   const [currentUser, setCurrentUser] = useState<User>();
//   const [createFormVisible, setCreateFormVisible] = useState(false);

//   useEffect(() => {
//     const fetchUserAndListings = async () => {
//       try {
//         const userResponse = await userService.getCurrentUser();
//         if (!userResponse.data) return;
//         setCurrentUser(userResponse.data);
//         const listingsResponse = await SpaceListingService().getAll();
//         const userListings = listingsResponse.data?.filter(
//           listing => listing.user_id === userResponse.data?.id
//         ) ?? [];
//         setUserSpaceListings(userListings);
//       } catch (error) {
//         console.error("Error fetching user and space listings:", error);
//       }
//     };

//     fetchUserAndListings();
//   }, []);

//   const handleCreateSpaceClick = () => {
//     setCreateFormVisible(!createFormVisible);
//   };

//   return (
//     <div className="flex flex-col p-4 border border-2 rounded-lg bg-[#F7FCEF] gap-2 m-6">
//       <div className="text-md lg:text-base font-bold">
//         🏡 Have a co-living space, sublet, or vacant room?
//       </div>
//       <div className="text-sm lg:text-base ">
//         Add your space to be discovered by people looking for housing.
//       </div>
//       <button
//         className="bg-[#4CAF50] text-xs text-white p-3 rounded-3xl w-fit px-4"
//         onClick={handleCreateSpaceClick}
//       >
//         {createFormVisible ? 'Close form' : 'Add your space'}
//       </button>
//       {createFormVisible && <SpaceListingCreateForm onSuccess={handleCreateSpaceClick} />}
//     </div>
//   );
// };

// export default SpaceBanner;

// 
import SpaceListingModal from "../Modal/SpaceListingModal";// Adjust the import path

interface SpaceBannerProps {
  onListingAdded: () => void;
}

const SpaceBanner = ({ onListingAdded }: SpaceBannerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Function to open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Function to close the modal
  };

  return (
    <div className="flex flex-col p-4 border border-2 rounded-lg bg-[#F5F8F7] gap-2 mb-2">
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
        Add me
      </button>
      {isModalOpen && (
        <SpaceListingModal
          onClose={closeModal}
          onSubmitSuccess={onListingAdded}
        />
      )}
    </div>
  );
};

export default SpaceBanner;
