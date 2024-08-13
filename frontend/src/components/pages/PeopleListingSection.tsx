import UserListing from "../compound/UserListing";
import { UserListingProps, UserListingType } from "../types";

export default function PeopleListingSection() {
  const currentDate = new Date();
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
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {userlistings.map((listing) => (
          <UserListing UserData={listing} />
        ))}
      </div>
      {POSTING_TIME_FRAMES.map((frame) => (
        <div>
          <div>{frame[0] as string}</div>
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
            .map((listing) => (
              <UserListing UserData={listing} />
            ))}
        </div>
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
