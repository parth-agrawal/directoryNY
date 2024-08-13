import { useState } from "react";

const profileImage = "/src/assets/IMG_4528.jpg"

export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 rounded-full focus:outline-none bg-transparent hover:bg-gray-200"
            >
                <img
                    src={profileImage}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-700">▼</span>
            </button>
            {isOpen && (
                <div className="absolute right-20 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Edit my listing</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign out</a>
                </div>
            )}
        </div>
    );
}