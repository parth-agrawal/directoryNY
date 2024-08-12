import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import UserDropdown from "./UserDropdown";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Directory NY logo */}
        <div className="flex-shrink-0">

          <span className="text-xl font-bold">Directory NY</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-blue-600">
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
    </nav>
  );
}