import { SpaceListing } from '@prisma/client';


export interface ISpaceListingService {
    getAllSpaceListings(): Promise<SpaceListing[]>
    getSpaceListingById({ spaceListingId }: { spaceListingId: string }):
        Promise<SpaceListing | null>
    createSpaceListing({ newSpaceListing }: { newSpaceListing: SpaceListing }):
        Promise<SpaceListing>
    updateSpaceListing({ updatedSpaceListing }: { updatedSpaceListing: SpaceListing }):
        Promise<SpaceListing>
    deleteSpaceListing({ spaceListingId }: { spaceListingId: string }):
        Promise<SpaceListing>
}
