export type UserListingType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  user_id: string;
  phone?: string;
  email?: string;
  description: string;
  moveInTime: string;
  leaselength: string;
  housematesCount: string;
  website: string;
};

export type UserListingInput = Omit<
  UserListingType,
  "id" | "createdAt" | "updatedAt"
>;
