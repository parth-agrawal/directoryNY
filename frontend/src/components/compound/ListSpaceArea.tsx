import { useState } from "react"
import { useUserService } from "../../lib/services/users/service"

export const ListSpaceArea = () => {

    // const user = useUserService()
    const [hasCreatedSpace, setHasCreatedSpace] = useState(false)
    // if (user.createdSpaces.length > 0) {
    //     setHasCreatedSpace(true)
    // } // replace with real data

    const handleCreateSpaceClick = () => {
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