export type UserListingType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user_id: string;
  leaselength: string;
  moveInTime: string;
  housematesCount: string;
  description: string;
  website?: string;
  phone?: string;
  email?: string;
};

export type UserListingInput = Omit<
  UserListingType,
  "id" | "createdAt" | "updatedAt"
>;
