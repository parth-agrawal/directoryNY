export type UserListingType = {
  contact: {
    twitter_handle: string;
    twitter_url: string;
    contact_number?: string;
    email?: string;
  };
  name: string;
  twitter_photo_url: string;
  description: string;
  lease_length_preference: string;
  lease_timing_preference: string;
  lease_roommates_preference: string;
  post_date: string;
  referrer_info: {
    name: string;
    twitter_url: string;
    twitter_photo_url: string;
  };
};
export type UserListingProps = {
  UserData: UserListingType;
};
