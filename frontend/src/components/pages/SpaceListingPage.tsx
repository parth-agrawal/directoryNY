import { CreateSpaceListingArea } from "../compound/CreateSpaceListingArea";
import SpaceListingSection from "./SpaceListingsSection";
import SpaceListingCard from "../compound/SpaceListing";
import UserListing from "../compound/UserListing";

export const SpaceListingPage = () => {


  return (
    <>
      <CreateSpaceListingArea />
      <SpaceListingSection />
    </>
  );
};
