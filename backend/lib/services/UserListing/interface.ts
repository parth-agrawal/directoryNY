import { UserListing } from "@prisma/client"

export interface IUserListingService {
    getUserListingById({ userListingId }: { userListingId: string }):
        Promise<UserListing | null>
    getAllUserListings(): Promise<UserListing[]>
    createUserListing({ newUserListing }: { newUserListing: UserListing }):
        Promise<UserListing>
    updateUserListing({ updatedUserListing }: {
        updatedUserListing:
        UserListing
    }): Promise<UserListing>
    deleteUserListing({ userListingId }: { userListingId: string }):
        Promise<UserListing>
}
