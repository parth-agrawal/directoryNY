import { useEffect, useState } from "react"
import { UserService } from "../../lib/services/users/service"
import { SpaceListing, SpaceListingInput } from "../../lib/services/Space-Listing/types"
import SpaceListingService from "../../lib/services/Space-Listing/service"
import { SpaceListingCreateForm } from "./SpaceListingCreateForm"
import SpaceBanner from "./Banner/SpaceBanner"

export const CreateSpaceListingArea = () => {

    const userService = UserService();
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
            <SpaceBanner />


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