//import FilterSection from "../compound/FilterSection";
import UserListing from "../compound/UserListing";
import { useEffect, useState } from "react";
// import { UserListingProps, UserListingType } from "../types";
import { UserListingType } from "../../lib/services/User-Listing/types";
import UserListingService from "../../lib/services/User-Listing/service";
import SpaceListingService from "../../lib/services/Space-Listing/service";
import SpaceListingCard from "../compound/SpaceListing";

import { userlistings } from "../../userlistings";

import ProfileBanner from "../compound/Banner/ProfileBanner";
import { SpaceListing } from "../../lib/services/Space-Listing/types";

// type UserPreference = Pick<
//   UserListingType,
//   | "lease_length_preference"
//   | "lease_timing_preference"
//   | "lease_roommates_preference"
// >;

export default function SpaceListingSection() {
  const [peoplelistings, setpeopleListings] = useState<Array<SpaceListing>>([]);
  const currentDate = new Date();

  useEffect(() => {
    SpaceListingService()
      .getAll()
      .then((listings) => {
        console.log("listings", listings.data.listings);
        setpeopleListings(listings.data.listings);
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

  console.log(peoplelistings);
  function adj_date(number: number) {
    const current_copy = new Date(currentDate.valueOf());
    current_copy.setDate(current_copy.getDate() - number);
    return current_copy;
  }

  const POSTING_TIME_FRAMES = [
    ["Today", adj_date(0), adj_date(1)],
    ["This Week", adj_date(1), adj_date(7)],
    ["This Month", adj_date(7), adj_date(31)],
    ["Older", adj_date(31), new Date(0)],
  ];

  POSTING_TIME_FRAMES.map((frame) => {
    console.log("frame", frame);
    peoplelistings
      .sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
      )
      .filter((f) => {
        console.log(new Date(f.createdAt), frame);
        console.log(
          new Date(f.createdAt) <= frame[1],
          new Date(f.createdAt) > frame[2]
        );
        return (
          new Date(f.createdAt) <= frame[1], new Date(f.createdAt) > frame[2]
        );
      })
      .map((listing) => {
        console.log("listing", listing);
        return listing;
      });
  });

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
      {/* <div className="flex flex-col gap-4 mb-4"> */}
      {/* <SpaceListing SpaceData={}/> */}

      {POSTING_TIME_FRAMES.map((frame) => (
        <>
          <div className="font-bold text-2xl pl-2 mt-4">
            {frame[0] as string}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-primary p-6">
            {peoplelistings
              .sort((a, b) =>
                a.createdAt > b.createdAt
                  ? 1
                  : b.createdAt > a.createdAt
                  ? -1
                  : 0
              )
              .filter(
                (f) =>
                  new Date(f.createdAt) <= frame[1] &&
                  new Date(f.createdAt) > frame[2]
              )
              .map((listing) => (
                <SpaceListingCard SpaceData={listing} />
              ))}
          </div>
        </>
      ))}
      {/* <TimeFrame /> */}
    </>
  );
}
