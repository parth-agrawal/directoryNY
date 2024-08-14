import axios from "axios";
import { User } from "../src/lib/services/users/types";

export const EP = {
  listings: {
    createListing: "/space-listings/create",
    getAllListings: "/space-listings/all",
    getListingByUserId: (userId: string) => `/space-listings/${userId}`,
    getListingById: (listingId: string) => `/space-listings/${listingId}`,
    updateListing: (listingId: string) => `/space-listings/${listingId}`,
    deleteListing: (listingId: string) => `/space-listings/${listingId}`,
  },
  userlistings: {
    createListing: "/user-listings/create",
    getAllUserListings: "/user-listings/all",
    getUserListingByUserId: (userId: string) => `/user-listings/${userId}`,
    getUserListingById: (userlistingId: string) =>
      `/user-listings/${userlistingId}`,
    updateUserListing: (userlistingId: string) =>
      `/user-listings/${userlistingId}`,
    deleteUserListing: (userlistingId: string) =>
      `/user-listings/${userlistingId}`,
  },
  users: {
    getAllUsers: "/users/all",
    getUserById: (userId: string) => `/users/${userId}`,
    createUser: `/users/new`,
    updateUser: (userId: string) => `/users/${userId}`,
    deleteUser: (userId: string) => `/users/${userId}`,
  },
};

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
