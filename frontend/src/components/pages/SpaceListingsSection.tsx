import { useEffect, useState } from "react";
import { SpaceListing } from "../../lib/services/Space-Listing/types";
import SpaceListingService from "../../lib/services/Space-Listing/service";
import SpaceListingCard from "../compound/SpaceListing";

// ... existing imports ...

export default function SpaceListingSection() {
  const [spaceListings, setSpaceListings] = useState<Array<SpaceListing>>([]);
  const currentDate = new Date();

  useEffect(() => {
    SpaceListingService().getAll().then((listings) => {
      console.log('Fetched listings:', listings.data);
      setSpaceListings(listings.data);
    });
  }, []);

  const default_values: [string, string, string] = [
    "Any lease",
    "Any count",
    "Any timeline",
  ];
  const [leaselengthpreference, setLeaselengthpreference] = useState(
    default_values[0]
  );
  const [leaseroommatereference, setLeaseroommatereference] = useState(
    default_values[1]
  );
  const [leasetimingpreference, setLeasetimingpreference] = useState(
    default_values[2]
  );

  const adjustDate = (daysAgo: number) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - daysAgo);
    return date;
  };

  const POSTING_TIME_FRAMES = [
    ["Today", adjustDate(0), adjustDate(1)],
    ["This Week", adjustDate(1), adjustDate(7)],
    ["This Month", adjustDate(7), adjustDate(31)],
    ["Older", adjustDate(31), new Date(0)],
  ];

  const getSortedFilteredListings = (startDate: Date, endDate: Date) => {
    const filteredListings = spaceListings
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .filter((listing) => {
        const createdAt = new Date(listing.createdAt);
        return createdAt <= startDate && createdAt > endDate;
      });
    console.log('Filtered listings:', filteredListings);
    return filteredListings;
  };

  const SelectFilter = ({
    name,
    options,
    changeHandler,
    selected,
    defaultval,
  }: {
    name: string;
    options: Array<string>;
    selected: string;
    defaultval: string;
    changeHandler: React.ChangeEventHandler<HTMLSelectElement>;
  }) => {
    return (
      <select
        // type="button"
        role="combobox"
        aria-controls="radix-:r2nu:"
        aria-expanded="false"
        aria-autocomplete="none"
        dir="ltr"
        data-state="closed"
        data-placeholder=""
        value={selected}
        onChange={changeHandler}
        defaultValue={defaultval}
        className="flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-[#FFFDF3] px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1  "
      >
        <option disabled selected>
          {name}
        </option>
        {options.map((opt) => (
          <option>{opt}</option>
        ))}
        <span>{name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-4 w-4 opacity-50"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </select>
    );
  };

  return (
    <>
      {console.log('POSTING_TIME_FRAMES:', POSTING_TIME_FRAMES)}
      {POSTING_TIME_FRAMES.map(([frameName, startDate, endDate]) => {
        console.log('Rendering frame:', frameName, startDate, endDate);
        const listings = getSortedFilteredListings(startDate as Date, endDate as Date);
        console.log('Listings for', frameName, ':', listings);
        return (
          <ListingSection
            key={frameName as string}
            frameName={frameName as string}
            listings={listings}
          />
        );
      })}
    </>
  );
}

interface ListingSectionProps {
  frameName: string;
  listings: SpaceListing[];
}

function ListingSection({ frameName, listings }: ListingSectionProps) {
  console.log('ListingSection rendering:', frameName, listings);
  return (
    <div>
      <h2 className="font-bold text-2xl pl-2 mt-4">{frameName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-primary p-6">
        {listings.map((listing) => (
          <SpaceListingCard key={listing.id} SpaceData={listing} />
        ))}
      </div>
    </div>
  );
}