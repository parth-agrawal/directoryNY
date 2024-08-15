export type SpaceListing = {
    id: string;
    user_id: string;
    name: string;
    description: string;
    location: string;
    housemates: string;
    priceRange: string;
    website: string | null;
    image: string | null;
    phone: string | null;
    email: string | null;
}

export type SpaceListingInput = Omit<SpaceListing, 'id'>
