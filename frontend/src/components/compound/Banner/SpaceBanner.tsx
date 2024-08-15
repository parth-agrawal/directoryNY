import { useEffect, useState } from "react";
import { UserService } from "../../../lib/services/Users/service";
import SpaceListingService from "../../../lib/services/Space-Listing/service";
import { SpaceListing } from "../../../lib/services/Space-Listing/types";
import { User } from "../../../lib/services/Users/types";
import { SpaceListingCreateForm } from "../SpaceListingCreateForm";

const SpaceBanner = () => {



  const userService = UserService();
  const [userSpaceListings, setUserSpaceListings] = useState<SpaceListing[]>([]);

  const [currentUser, setCurrentUser] = useState<User>()



  useEffect(() => {
    const fetchUserAndListings = async () => {
      try {
        const userResponse = await userService.getCurrentUser();
        if (!userResponse.data) return;
        setCurrentUser(userResponse.data);
        if (currentUser) {
          const listingsResponse = await SpaceListingService().getAll();
          if (listingsResponse.data) {
            const userListings = listingsResponse.data.filter(
              listing => listing.user_id === currentUser.id
            );
            setUserSpaceListings(userListings);
          }
        }
      } catch (error) {
        console.error("Error fetching user and space listings:", error);
      }
    };

    fetchUserAndListings();
  }, []);

  // const user = useUserService()
  const [createFormVisible, setCreateFormVisible] = useState(false)
  // if (user.createdSpaces.length > 0) {
  //     setHasCreatedSpace(true)
  // } // replace with real data

  const handleCreateSpaceClick = () => {
    setCreateFormVisible(true)
    // update user data
  }

  return (
    <div className="flex flex-col p-4 border border-2 rounded-lg bg-[#F7FCEF] gap-2 m-6">
      <div className="text-md lg:text-base font-bold">
        🏡 Have a co-living space, sublet, or vacant room?
      </div>
      <div className="text-sm lg:text-base ">
        Add your space to be discovered by people looking for housing.
      </div>

      {currentUser ? (
        userSpaceListings.length > 0 ? (
          <EditSpaceArea />
        ) : (
          <SpaceListingCreateButton clickHandler={handleCreateSpaceClick} />
        )
      ) : null}
      {createFormVisible ? <SpaceListingCreateForm /> : null}

    </div>
  );
};


const SpaceListingCreateButton = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <button onClick={clickHandler}>
      Add your space
    </button>
  )
}



const EditSpaceArea = () => {
  return (
    <div>
      Edit
    </div>
  )
}


export default SpaceBanner;
