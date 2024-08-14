import axios from "axios";
import { getAuth } from "firebase/auth";

export const EP = {
  listings: {
    createListing: "/space-listings/create",
    getAllListings: "/space-listings/all",
    getListingByUserId: (userId: string) => `/space-listings/${userId}`,
    getListingById: (listingId: string) => `/space-listings/${listingId}`,
    updateListing: (listingId: string) => `/space-listings/${listingId}`,
    deleteListing: (listingId: string) => `/space-listings/${listingId}`
  },
  users: {
    getAllUsers: "/users/all",
    getUserById: (userId: string) => `/users/${userId}`,
    createUser: `/users/new`,
    updateUser: (userId: string) => `/users/${userId}`,
    deleteUser: (userId: string) => `/users/${userId}`
  }

}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    // add firebase token to header
    "Content-Type": "application/json",
  }
})


api.interceptors.request.use(async (config) => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken();
  console.log("attaching token", token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default api;