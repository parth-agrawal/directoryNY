import { useState } from "react";
import FilterSection from "../compound/FilterSection";
import UserListing from "../compound/UserListing";
import { UserListingProps, UserListingType } from "../types";
import { userlistings } from "../../userlistings";
import ProfileBanner from "../compound/Banner/ProfileBanner";

export default function PeopleListingSection() {
  const currentDate = new Date();
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

  // values from filter section
  const [filterValues, setFilterValues] = useState({
    leaseTiming: '',
    housemateCount: '',
    movingIn: ''
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [name]: value }));
    console.log(filterValues);
  };

  return (
    <>
      {/* selection filters */}
      <ProfileBanner />

      <FilterSection onFilterChange={handleFilterChange} />
      {/* Map user cards */}
      < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-primary p-6" >
        {
          userlistings.map((listing) => (
            <div className="bg-inherit">
              <UserListing UserData={listing} />
            </div>
          ))
        }
      </div >
      {
        POSTING_TIME_FRAMES.map((frame) => (
          <div>
            {/* This month section */}
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
                <div className="bg-inherit w-full">
                  <UserListing UserData={listing} />
                </div>
              ))}
          </div>
        ))
      }
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

