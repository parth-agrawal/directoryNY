import { SpaceListing } from '@prisma/client';
import { UserListing } from '@prisma/client';


interface SpaceListingService {
    getSpaceListing({ spaceListingId }: { spaceListingId: string }):
        Promise<SpaceListing>
    createSpaceListing({ newSpaceListing }: { newSpaceListing: SpaceListing }):
        Promise<SpaceListing>
    updateSpaceListing({ updatedSpaceListing }: { updatedSpaceListing: SpaceListing }):
        Promise<SpaceListing>
    deleteSpaceListing({ spaceListingId }: { spaceListingId: string }):
        Promise<SpaceListing>
}

interface UserListingService {
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