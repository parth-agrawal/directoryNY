import { useEffect, useState } from "react"
import { useUserService } from "../../lib/services/users/service"
import { SpaceListing } from "../../lib/services/Space-Listing/types"
import SpaceListingService from "../../lib/services/Space-Listing/service"

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
                {createFormVisible ? <CreateSpaceListingForm /> : null}
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

type SpaceListingFormData = Omit<SpaceListing, 'id'>

const CreateSpaceListingForm = () => {

    const [userId, setUserId] = useState<string | null>(null)



    useEffect(() => {
        const fetchUser = async () => {
            const user = await useUserService().getCurrentUser()
            setUserId(user?.id || null)
        }
        fetchUser()
    }, [])

    const [formData, setFormData] = useState<SpaceListingFormData>({
        user_id: userId || '',
        name: '',
        description: '',
        location: '',
        housemates: '',
        priceRange: '',
        website: '',
        image: '',
        phone: '',
        email: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await SpaceListingService().create(formData)
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="housemates" className="block text-sm font-medium text-gray-700">Housemates</label>
                    <input
                        type="text"
                        id="housemates"
                        name="housemates"
                        value={formData.housemates}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">Price Range</label>
                    <input
                        type="text"
                        id="priceRange"
                        name="priceRange"
                        value={formData.priceRange}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website (optional)</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL (optional)</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (optional)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create Space Listing
                    </button>
                </div>
            </form>

        </div >
    )
}

const EditSpaceArea = () => {
    return (
        <div>
            Edit
        </div>
    )
}