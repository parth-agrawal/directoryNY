import SpaceListingService from "../../lib/services/Space-Listing/service";
import { UserListingProps } from "../types";
import TwitterIcon from '@mui/icons-material/Twitter';

//https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg

export default function UserListing({ UserData }: UserListingProps) {
  return (
    <>
      <div className="p-4 bg-[#FFFDF3] rounded-2xl flex flex-col border-[1px] max-w-1/3 child-inherit-bg">
        <div className="flex items-center justify-between bg-inherit">
          <img
            className="rounded-full w-20 h-20 lg:w-28 lg:h-28 undefined mb-2"
            alt="User profile image"
            src={UserData.twitter_photo_url}
          />
          <div className="flex flex-col items-center max-w-[60%] bg-inherit">
            <span className="font-semibold">{UserData.name}</span>
            {/* twitter handle with icon */}
            <span className="flex flex-row items-center text-blue-500 text-xs md:text-sm mb-2" >
              @{UserData.contact.twitter_handle}
              <span className="text-blue-500 ml-0.5 ">
                <TwitterIcon fontSize="small" />
              </span>
            </span>
            <button className="bg-[#1D462F] text-white rounded-3xl ring-offset-white font-semibold p-2 text-xs">
              Contact me
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" rounded-xl text-xs p-2 bg-[#F6F5EB] my-1 text-slate-600">
            {UserData.description}
          </div>
          {/* <div className="flex flex-row gap-2"> */}
          <div className="text-xs md:text-sm bg-inherit">
            <div className="bg-inherit">
              <span className="text-xs md:text-sm font-semibold mr-1 bg-inherit">
                Preference
              </span>
              <span className="text-xs md:text-sm">{UserData.lease_preference}</span>
            </div>
            <div>
              <span className="text-xs md:text-sm font-semibold mr-1 ">
                Moving
              </span>{" "}
              <span className="text-xs md:text-sm">{UserData.lease_timing}</span>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <span className="text-xs md:text-sm font-semibold mr-1">
                  Referred by
                </span>
                <a
                  href={UserData.referrer_info.twitter_url}
                  className="flex items-center"
                >
                  <img
                    className="rounded-full w-7 h-7 undefined"
                    alt="User profile image"
                    src={UserData.referrer_info.twitter_photo_url}
                  />
                  <span className="text-blue-500 hover:text-blue-400 m-1 text-xs">
                    {UserData.referrer_info.name}
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
