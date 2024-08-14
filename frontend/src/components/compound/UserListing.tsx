import SpaceListingService from "../../lib/services/Space-Listing/service";
import { UserListingType } from "../../lib/services/User-Listing/types";

//https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg

export default function UserListing({
  UserData,
}: {
  UserData: UserListingType;
}) {
  return (
    <>
      <div className="p-6 bg-[#FFFDF3] rounded-2xl flex flex-col gap-4 border-[1px] max-w-sm m-2">
        <div className="flex items-center justify-between gap-2">
          <img
            className="rounded-full w-28 h-28 lg:w-36 lg:h-36 undefined"
            alt="User profile image"
            src={
              "https://www.shutterstock.com/image-photo/boat-tree-sunset-600nw-1770893537.jpg"
            }
          />
          <div className="flex flex-col items-center max-w-[60%]">
            <span className="font-semibold">{"NAME"}</span>
            <span>@{"twitterhandle"}</span>
            <button className="bg-green-900 text-white rounded-3xl ring-offset-white font-semibold p-2">
              Contact me
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" rounded-xl text-sm p-2 bg-[#F6F5EB]">
            {UserData.description}
          </div>
          {/* <link href="google.com">google.com</link> */}
          {/* <div className="flex flex-row gap-2"> */}
          <div className="text-md">
            <div>
              <span className="font-medium mr-1">Preference</span>
              <span>{UserData.leaselength}</span>
            </div>
            <div>
              <span className="font-medium mr-1">Moving</span>{" "}
              <span>{UserData.moveInTime}</span>
            </div>
            <div>
              <div>
                <span className="font-medium mr-1">Referred by</span>
                <a href={"twitter.com"} className="flex items-center">
                  <img
                    className="rounded-full w-7 h-7 undefined"
                    alt="User profile image"
                    src={
                      "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
                    }
                  />
                  <span className="text-blue-500 hover:text-blue-400 m-1">
                    {"Referrer"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
