import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import UserDropdown from "./UserDropdown";
import HousingForm from "../../base/HousingForm";
import Referral from "../../base/Referral";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [showHousingForm, setShowHousingForm] = useState(false);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const location = useLocation(); // Get the current location

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? "text-[#1d462f] bg-[#e7e9d8] border border-[#1d462f] rounded-md px-2 py-1 sm:px-4 sm:py-2" // Active link style
      : "text-[#1d462f] bg-transparent border border-[#1d462f] rounded-md hover:bg-[#e7e9d8] px-2 py-1 sm:px-4 sm:py-2"; // Inactive link style
  };

  return (
    <nav className="top-0 left-0 right-0 bg-primary">
      <div className="mx-auto px-4 py-2 flex justify-between items-center">
        {/* Directory NY logo */}
        <div className="flex-shrink-0 mx-1 sm:ml-6">
          <span className="text-xl font-bold font-serif">DirectoryNY</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-green-600"
            onClick={() => setShowReferralForm(true)}
          >
            <FontAwesomeIcon icon={faUserPlus} className="sm:mr-2" />
            <span className="hidden sm:inline">Invite a friend</span>
          </button>
          <UserDropdown />
        </div>
      </div>
      <div className="border-t border-b border-gray-200">
        <div className="mx-auto px-4">
          <div className="flex space-x-4 py-3 px-6">
            <Link to="/" className={getLinkClass("/")}>
              People
            </Link>
            <Link to="/spaces" className={getLinkClass("/spaces")}>
              Rooms
            </Link>

          </div>
        </div>
      </div>
      {showHousingForm && (
        <HousingForm onClose={() => setShowHousingForm(false)} />
      )}
      {showReferralForm && (
        <Referral onClose={() => setShowReferralForm(false)} />
      )}
    </nav>
  );
}


