import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import UserDropdown from "./UserDropdown";
import HousingForm from '../../base/HousingForm';

export default function NavBar() {
  const [showHousingForm, setShowHousingForm] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Directory NY logo */}
        <div className="flex-shrink-0">

          <span className="text-xl font-bold">Directory NY</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-black"
            onClick={() => setShowHousingForm(true)}
          >
            <FontAwesomeIcon icon={faHouse} className="mr-2" />
            Help Me find housing
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-green-600">
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Invite a friend
          </button>
          <UserDropdown />
        </div>
      </div>
      <div className="border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 py-3">
            <button className="px-4 py-2 text-gray-600 bg-transparent hover:text-gray-900 border-b-2 border-gray-200 hover:border-gray-900">People</button>
            <button className="px-4 py-2 text-gray-600 bg-transparent hover:text-gray-900 border-b-2 border-gray-200 hover:border-gray-900">Rooms</button>
            <button className="px-4 py-2 text-gray-600 bg-transparent hover:text-gray-900 border-b-2 border-gray-200 hover:border-gray-900">Map View</button>
          </div>
        </div>
      </div>
      {showHousingForm && (
        <HousingForm onClose={() => setShowHousingForm(false)} />
      )}
    </nav>
  );
}