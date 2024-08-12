import { UserListing } from "@prisma/client"

interface IUserListingService {
    getUserListing({ userListingId }: { userListingId: string }):
        Promise<UserListing>
    createUserListing({ newUserListing }: { newUserListing: UserListing }):
        Promise<UserListing>
    updateUserListing({ updatedUserListing }: {
        updatedUserListing:
        UserListing
    }): Promise<UserListing>
    deleteUserListing({ userListingId }: { userListingId: string }):
        Promise<UserListing>
}