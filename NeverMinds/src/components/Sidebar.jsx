import React, { useState } from "react";
import logo from "../assets/logo.jpg"; // Ensure this path is correct

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuizzesOpen, setIsQuizzesOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle quizzes sub-menu visibility
  const toggleQuizzes = () => {
    setIsQuizzesOpen(!isQuizzesOpen);
  };

  return (
    <div className="fixed top-0 left-0 h-screen z-50">
      {/* Menu Icon */}
      <div
        className="w-16 h-16 flex items-center justify-center text-white cursor-pointer transition-all duration-300"
        onClick={toggleSidebar}
      >
        {!isSidebarOpen ? (
          // Hamburger Icon
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-black rounded"></span>
            <span className="block w-8 h-1 bg-yellow-400 rounded"></span>
            <span className="block w-8 h-1 bg-black rounded"></span>
          </div>
        ) : (
          // Close Icon
          <div className="text-3xl font-bold">×</div>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-screen bg-[rgba(0,0,0,0.6)] backdrop-blur-lg text-white overflow-hidden transition-all duration-500 ${
          isSidebarOpen ? "w-72 shadow-2xl" : "w-0"
        }`}
      >
        {isSidebarOpen && (
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[rgba(0,0,0,0.8)] border-b border-gray-600">
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 rounded-full shadow-md border-2 border-yellow-400"
                />
                <span className="text-lg font-bold text-yellow-400 tracking-wide">
                  NeverMinds
                </span>
              </div>
              <button
                className="text-2xl text-white hover:text-yellow-400 transition-colors"
                onClick={toggleSidebar}
              >
                ×
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="mt-6 space-y-4 px-6">
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer transition-all">
                🏠 <span className="text-lg font-medium">Home</span>
              </li>

              {/* Quizzes with Sub-Menu */}
              <li className="flex flex-col">
                <div
                  className="flex items-center gap-4 py-3 px-3 hover:bg-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer transition-all"
                  onClick={toggleQuizzes}
                >
                  📝 <span className="text-lg font-medium">Quizzes</span>
                  <span
                    className={`ml-auto transform transition-transform duration-300 ${
                      isQuizzesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>
                {isQuizzesOpen && (
                  <ul className="pl-8 space-y-2">
                    <li className="py-1 text-lg font-medium hover:text-yellow-400 cursor-pointer transition-all">
                      Public Quizzes
                    </li>
                    <li className="py-1 text-lg font-medium hover:text-yellow-400 cursor-pointer transition-all">
                      Private Quizzes
                    </li>
                  </ul>
                )}
              </li>

              <li className="flex items-center gap-4 py-3 px-3 hover:bg-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer transition-all">
                🙍‍♂️ <span className="text-lg font-medium">My Profile</span>
              </li>
            </ul>

            {/* Logout Button */}
            <div className="mt-auto px-6 py-4 bg-[rgba(0,0,0,0.8)]">
              <button className="flex items-center gap-4 w-full text-lg font-medium text-white hover:text-yellow-400 transition-all">
                🚪 <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
