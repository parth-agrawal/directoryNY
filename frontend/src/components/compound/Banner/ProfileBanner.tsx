const ProfileBanner = () => {
    return <div className="flex flex-col p-4 border border-2 rounded-lg bg-[#F5F8F7] gap-2 m-6">
        <div className="text-md lg:text-base font-bold">

            👋 Are you looking for housing?
        </div>
        <div className="text-sm lg:text-base ">
            Create a profile to be discovered by communities and organizers
        </div>
        <button className="bg-[#5279E0] text-xs text-white p-3 rounded-3xl w-fit px-4">
            Add me
        </button>
    </div>
};

export default ProfileBanner;