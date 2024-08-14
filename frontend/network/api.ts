import axios from "axios";

export const EP = {
  listings: {
    createListing: "/space-listings/create",
    getAllListings: "/space-listings/all",
    getListingByUserId: (userId: string) => `/space-listings/${userId}`,
    getListingById: (listingId: string) => `/space-listings/${listingId}`,
    updateListing: (listingId: string) => `/space-listings/${listingId}`,
    deleteListing: (listingId: string) => `/space-listings/${listingId}`
  },
  referrals: {
    getReferralCode: (userId: string) => `/referral/code/${userId}`,
    applyReferralCode: "/referral/apply",
    getReferralStatus: (referralId: string) => `/referral/status/${referralId}`
  }
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

// Referral-related API functions
export const referralApi = {
  getReferralCode: (userId: string) => api.get(EP.referrals.getReferralCode(userId)),
  applyReferralCode: (newUserId: string, referralCode: string) =>
    api.post(EP.referrals.applyReferralCode, { newUserId, referralCode }),
  getReferralStatus: (referralId: string) => api.get(EP.referrals.getReferralStatus(referralId))
}

export default api;