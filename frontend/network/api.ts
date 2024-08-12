import axios from "axios";

export const EP = {
  listings: {
    createListing: "/listing",
    getAllListings: "/listings",
    getListingByUserId: (userId: string) => `/listings/user/${userId}`,
    getListingById: (listingId: string) => `/listings/${listingId}`,
    updateListing: (listingId: string) => `/listings/update/${listingId}`,
    deleteListing: (listingId: string) => `/listings/delete/${listingId}`
  }
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

export default api;