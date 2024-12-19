import React from "react";
import logo from "../assets/logo.jpg"; // Replace with your logo path

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 hover:w-64 transition-all duration-300 bg-deep-charcoal text-soft-pearl shadow-lg z-50 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-center h-16">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="hidden hover:inline ml-4 font-extrabold text-lg">
            NeverMinds
          </span>
        </div>
        <ul className="mt-8 space-y-4">
          <li className="group flex items-center gap-4 px-4 py-2 hover:bg-dandelion-yellow hover:text-deep-charcoal rounded-lg cursor-pointer">
            🏠 Home
          </li>
          <li className="group flex flex-col gap-2 px-4 py-2 hover:bg-dandelion-yellow hover:text-deep-charcoal rounded-lg cursor-pointer">
            📝 Quizzes
            <ul className="hidden group-hover:block pl-8 space-y-2">
              <li className="hover:text-dandelion-yellow">Private Quizzes</li>
              <li className="hover:text-dandelion-yellow">Public Quizzes</li>
            </ul>
          </li>
          <li className="group flex items-center gap-4 px-4 py-2 hover:bg-dandelion-yellow hover:text-deep-charcoal rounded-lg cursor-pointer">
            🙍‍♂️ My Profile
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center">
        <button className="flex items-center gap-2 px-4 py-2 mb-4 text-soft-pearl hover:text-dandelion-yellow">
          🚪 Logout
        </button>
        <img
          src="https://via.placeholder.com/40" // Replace with the user's profile picture
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
