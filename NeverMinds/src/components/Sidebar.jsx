import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <h1 className="text-xl font-bold px-6 py-4">nevermind</h1>
      <ul className="space-y-4 px-6">
        <li>
          <a href="#home" className="flex items-center space-x-2 hover:text-yellow-400">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#quizzes" className="flex items-center space-x-2 hover:text-yellow-400">
            <i className="fas fa-question-circle"></i>
            <span>Quizzes</span>
          </a>
        </li>
        <li>
          <a href="#profile" className="flex items-center space-x-2 hover:text-yellow-400">
            <i className="fas fa-user"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <a href="#logout" className="flex items-center space-x-2 hover:text-yellow-400">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
