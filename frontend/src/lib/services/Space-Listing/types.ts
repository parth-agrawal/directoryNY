export type SpaceListing = {
    id: string;
    user_id: string;
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

export type SpaceListingInput = Omit<SpaceListing, 'id'>
