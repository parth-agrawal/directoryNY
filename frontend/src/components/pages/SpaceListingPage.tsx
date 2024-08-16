import React, { useState } from 'react';
import { CreateSpaceListingArea } from "../compound/CreateSpaceListingArea";
import SpaceListingSection from "./SpaceListingsSection";

export const SpaceListingPage = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleNewListing = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <>
      <CreateSpaceListingArea onNewListing={handleNewListing} />
      <SpaceListingSection key={refreshTrigger} />
    </>
  );
};