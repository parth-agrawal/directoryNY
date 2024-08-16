export type SpaceListing = {
  id: string;
  createdAt: string;
  updatedAt: string;
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
  twitter_url?: string;
  leaselength: string;
}

export type SpaceListingInput = Omit<
  SpaceListing,
  "id" | "createdAt" | "updatedAt"
>;