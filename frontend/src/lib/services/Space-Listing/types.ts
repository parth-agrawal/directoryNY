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
  twitter_handle: string;
  referrer_image?: string;
  referrer_name: string;
  room_price: string;
  referrer_twitter_url: string;
}

export type SpaceListingInput = Omit<
  SpaceListing,
  "id" | "createdAt" | "updatedAt"
>;