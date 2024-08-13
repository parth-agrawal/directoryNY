import UserListing from "../compound/UserListing";
import { UserListingProps, UserListingType } from "../types";
import { useState } from "react";

type UserPreference = Pick<
  UserListingType,
  | "lease_length_preference"
  | "lease_timing_preference"
  | "lease_roommates_preference"
>;

export default function PeopleListingSection() {
  const currentDate = new Date();

  const [preferencefilter, setpreferenceFilter] = useState<UserPreference>({
    lease_length_preference: "Any Lease",
    lease_roommates_preference: "Any Count",
    lease_timing_preference: "Any timeline",
  });

  const userlistings = [
    {
      post_datetime: adj_date(10).toString(),
      contact: {
        twitter_handle: "mytwitter",
        twitter_url: "google.com",
      },
      name: "bob",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      description:
        "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
      lease_preference: "A day",
      lease_timing: "soon",
      referrer_info: {
        name: "Hello",
        twitter_url: "google.com",
        twitter_photo_url:
          "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      },
    },
    {
      post_datetime: adj_date(10).toString(),
      contact: {
        twitter_handle: "mytwitter",
        twitter_url: "google.com",
      },
      name: "bob",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      description:
        "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
      lease_preference: "A day",
      lease_timing: "soon",
      referrer_info: {
        name: "Hello",
        twitter_url: "google.com",
        twitter_photo_url:
          "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      },
    },
    {
      post_datetime: adj_date(10).toString(),
      contact: {
        twitter_handle: "mytwitter",
        twitter_url: "google.com",
      },
      name: "bob",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      description:
        "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
      lease_preference: "A day",
      lease_timing: "soon",
      referrer_info: {
        name: "Hello",
        twitter_url: "google.com",
        twitter_photo_url:
          "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      },
    },
    {
      post_datetime: adj_date(10).toString(),
      contact: {
        twitter_handle: "mytwitter",
        twitter_url: "google.com",
      },
      name: "bob",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      description:
        "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
      lease_preference: "A day",
      lease_timing: "soon",
      referrer_info: {
        name: "Hello",
        twitter_url: "google.com",
        twitter_photo_url:
          "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      },
    },
    {
      post_datetime: adj_date(3).toString(),
      contact: {
        twitter_handle: "mytwitter",
        twitter_url: "google.com",
      },
      name: "bob",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      description:
        "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
      lease_preference: "A day",
      lease_timing: "soon",
      referrer_info: {
        name: "Hello",
        twitter_url: "google.com",
        twitter_photo_url:
          "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      },
    },
    {
      post_datetime: "2000-01-10",
      contact: {
        twitter_handle: "mytwitter",
        twitter_url: "google.com",
      },
      name: "bob",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      description:
        "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
      lease_preference: "A day",
      lease_timing: "soon",
      referrer_info: {
        name: "Hello",
        twitter_url: "google.com",
        twitter_photo_url:
          "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
      },
    },
  ];
  console.log(userlistings);
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
  // function organizePosts(posts: Array<UserListingType>) {
  //   const post_map = new Map();
  //   POSTING_TIME_FRAMES.forEach((time) => post_map.set(time, []));
  //   userlistings.forEach((value) => post_map.set(value.post_date, value));
  //   return post_map;
  // }
  // console.log(organizePosts(userlistings));
  // const TimeFrame = () => {
  //   const post_map = organizePosts(userlistings);
  //   console.log(post_map);
  //   return POSTING_TIME_FRAMES.map((time) => {
  //     console.log("time", time);
  //     return (
  //       <>
  //         <div>{time}</div>
  //         <div>Hello</div>
  //         <div className="flex flex-row flex-wrap">
  //           {post_map.get(time).map((listing) => (
  //             <UserListing UserData={listing} />
  //           ))}
  //         </div>
  //       </>
  //     );
  //   });
  // };
  POSTING_TIME_FRAMES.map((frame) => {
    console.log("frame", frame);
    userlistings
      .sort((a, b) =>
        a.post_datetime > b.post_datetime
          ? 1
          : b.post_datetime > a.post_datetime
          ? -1
          : 0
      )
      .filter((f) => {
        console.log(new Date(f.post_datetime), frame);
        console.log(
          new Date(f.post_datetime) <= frame[1],
          new Date(f.post_datetime) > frame[2]
        );
        return (
          new Date(f.post_datetime) <= frame[1],
          new Date(f.post_datetime) > frame[2]
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
  }: {
    name: string;
    options: Array<string>;
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
        className="flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-[#FFFDF3] px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300"
      >
        <option disabled selected value>
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
      <div className="flex flex-row gap-2 grow">
        <div className="flex flex-col gap-2 grow">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="Preferences"
          >
            Preference Filters
          </label>
          <div className="flex flex-row gap-2">
            <SelectFilter
              name="Lease length"
              options={["1-year Lease", "Short-term Lease", "Any lease"]}
            />
            <SelectFilter
              name="Housemate Count"
              options={[
                "1-2 housemates",
                "3-5 housemates",
                "6-12 housemates",
                "12+ housemates",
                "Any count",
              ]}
            />

            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-neutral-200 dark:bg-neutral-800 w-[1px] hidden sm:inline h-auto"
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 grow">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="Timeline"
          >
            Timeline
          </label>
          <SelectFilter
            name="Moving in..."
            options={["ASAP", "<3 months", "3+ months", "Any timeline"]}
          />
        </div>
        {/* </div> */}
      </div>

      {POSTING_TIME_FRAMES.map((frame) => (
        <>
          <div className="font-bold text-lg pl-2 mt-4">
            {frame[0] as string}
          </div>
          <div className="flex flex-row flex-wrap">
            {userlistings
              .sort((a, b) =>
                a.post_datetime > b.post_datetime
                  ? 1
                  : b.post_datetime > a.post_datetime
                  ? -1
                  : 0
              )
              .filter(
                (f) =>
                  new Date(f.post_datetime) <= frame[1] &&
                  new Date(f.post_datetime) > frame[2]
              )
              .filter((f) => f)
              .map((listing) => (
                <UserListing UserData={listing} />
              ))}
          </div>
        </>
      ))}
      {/* <TimeFrame /> */}

      <div className="flex flex-row bg-[#FEFBEB]">
        <button className="no-underline rounded-md py-1.5 px-3 text-[#474747] border border-[#cccccc]  hover:bg-[#f1efdf]">
          People
        </button>
        <button className="no-underline rounded-md py-1.5 px-3 font-bold text-[#1d462f] border-2 hover:border-[#1d462f] bg-transparent hover:bg-[#e7e9d8]">
          Rooms
        </button>
      </div>
    </>
  );
}
