import { useEffect, useState } from "react"
import { useUserService } from "../../lib/services/users/service"
import { SpaceListing, SpaceListingInput } from "../../lib/services/Space-Listing/types"
import SpaceListingService from "../../lib/services/Space-Listing/service"
import { SpaceListingCreateForm } from "./SpaceListingCreateForm"

export const CreateSpaceListingArea = () => {

    const userService = useUserService();
    const [userSpaceListings, setUserSpaceListings] = useState<SpaceListing[]>([]);

    useEffect(() => {
        const fetchUserSpaceListings = async () => {
            try {
                // const user = await userService.getCurrentUser();
                const user = { id: 'clzrcg4850000gwwz9cj69iyr' } // dummy til useUser is fixed
                if (user && user.id) {
                    const response = await SpaceListingService().getAll();
                    if (response.data && response.data.listings) {
                        const userListings = response.data.listings.filter(listing => listing.user_id === user.id);
                        setUserSpaceListings(userListings);
                    }
                }
            } catch (error) {
                console.error("Error fetching user space listings:", error);
            }
        };

        fetchUserSpaceListings();
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
        <div>
            <div className="flex flex-col p-4 border border-2 rounded-lg bg-[#EDFCDC] gap-2">
                <div className="text-2xl font-bold">

                    🏡 Have a co-living space, sublet, or vacant room?
                </div>
                <div className="text-xl ">
                    Add your space to be discovered by people looking for housing.
                </div>
                {userSpaceListings.length > 0 ? <EditSpaceArea /> : <SpaceListingCreateButton clickHandler={handleCreateSpaceClick} />}
                {createFormVisible ? <SpaceListingCreateForm /> : null}
            </div>


        </div>
    )

}


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