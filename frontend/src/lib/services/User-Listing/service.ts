import api, { EP } from "../../../../network/api";
import { UserListingType, UserListingInput } from "./types";

type Response<T> = Promise<{ data: T; error: string }>;

const UserListingService = () => ({
  create: (
    userListing: UserListingInput
  ): Response<{ listing: UserListingType }> =>
    api.post(EP.userlistings.createListing, userListing),

  getById: (userlistingId: string): Response<{ listing: UserListingType }> =>
    api.get(EP.userlistings.getUserListingById(userlistingId)),

  getAll: (): Response<{ userlistings: UserListingType[] }> =>
    api.get(EP.userlistings.getAllUserListings),

  update: (
    userlistingId: string,
    userListing: Partial<UserListingInput>
  ): Response<{ listing: UserListingType }> =>
    api.put(EP.userlistings.updateUserListing(userlistingId), userListing),

  delete: (userListingId: string): Response<{ userlisting: UserListingType }> =>
    api.delete(EP.userlistings.deleteUserListing(userListingId)),
});

export default UserListingService;
