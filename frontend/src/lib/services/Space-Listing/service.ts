import api, { EP } from "../../../../network/api";

interface SpaceListingInput {
    name: string;
    description: string;
    location: string;
    housemates: string;
    priceRange: string;
    website?: string;
    image?: string;
    phone?: string;
    email?: string;
}

export interface SpaceListing extends SpaceListingInput {
    id: string;
    user_id: string;
}

type Response<T> = Promise<{ data: T; error: string }>;

const SpaceListingService = () => ({
    create: (spaceListing: SpaceListingInput): Response<{ listing: SpaceListing }> =>
        api.post(EP.listings.createListing, spaceListing),

    getById: (listingId: string): Response<{ listing: SpaceListing }> =>
        api.get(EP.listings.getListingById(listingId)),

    getAll: (): Response<{ listings: SpaceListing[] }> =>
        api.get(EP.listings.getAllListings),

    update: (listingId: string, spaceListing: Partial<SpaceListingInput>): Response<{ listing: SpaceListing }> =>
        api.put(EP.listings.updateListing(listingId), spaceListing),

    delete: (listingId: string): Response<{ listing: SpaceListing }> =>
        api.delete(EP.listings.deleteListing(listingId))
});

export default SpaceListingService;