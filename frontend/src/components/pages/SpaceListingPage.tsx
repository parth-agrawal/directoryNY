import { CreateSpaceListingArea } from "../compound/CreateSpaceListingArea";
import SpaceListingSection from "./SpaceListingsSection";
import SpaceListingCard from "../compound/SpaceListing";

export const SpaceListingPage = () => {
  const space_listing = {
    // id: string;
    user_id: "4234232",
    phone: "00000",
    email: "test@test.com",
    description:
      "A description. A description. A description. A description. A description",
    housematesCount: "3-5 roomies",
    website: "google.com",
    location: "Location",
    image: "Image",
    housemates: 5,
    priceRange: "$1500-$1999",
  };

  return (
    <>
      <CreateSpaceListingArea />
      <SpaceListingSection />
      <SpaceListingCard SpaceData={space_listing} />
    </>
  );
};
