import { useEffect, useState } from "react"
import { useUserService } from "../../lib/services/users/service"
import { SpaceListing, SpaceListingInput } from "../../lib/services/Space-Listing/types"
import SpaceListingService from "../../lib/services/Space-Listing/service"
import { SpaceListingCreateForm } from "./SpaceListingCreateForm"

export const CreateSpaceListingArea = () => {

    // const user = useUserService()
    const [hasCreatedSpace, setHasCreatedSpace] = useState(false)
    const [createFormVisible, setCreateFormVisible] = useState(false)
    // if (user.createdSpaces.length > 0) {
    //     setHasCreatedSpace(true)
    // } // replace with real data

    const handleCreateSpaceClick = () => {
        setCreateFormVisible(true)
        setHasCreatedSpace(true)
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
                {hasCreatedSpace ? <EditSpaceArea /> : <CreateSpaceButton clickHandler={handleCreateSpaceClick} />}
                {createFormVisible ? <SpaceListingCreateForm /> : null}
            </div>


        </div>
    )

}


const CreateSpaceButton = ({ clickHandler }: { clickHandler: () => void }) => {
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