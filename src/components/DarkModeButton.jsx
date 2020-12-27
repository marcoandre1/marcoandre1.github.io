import React from "react";

const DarkModeButton = ({ isDarkMode, onDarkModeToggle }) => {
  return (
    <span
      role="checkbox"
      aria-checked={isDarkMode}
      tabIndex="0"
      onClick={onDarkModeToggle}
      className={`${
        isDarkMode ? "bg-indigo-600" : "bg-gray-500"
      } relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
    >
      <span
        aria-hidden="true"
        className={`${
          isDarkMode ? "translate-x-5" : "translate-x-0"
        } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
      ></span>
    </span>
  );
};

export default DarkModeButton;
