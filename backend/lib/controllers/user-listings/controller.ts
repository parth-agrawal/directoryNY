import express from "express";
import { UserListingService } from "../../services/UserListing/service";

const router = express.Router();

router.get('/all', async (req, res) => {
    const userListings = await UserListingService().getAllUserListings();
    if (userListings) {
        res.status(200).json(userListings);
    }
});