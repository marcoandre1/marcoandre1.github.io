import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Navigation = ({ languages, isDarkMode, onDarkModeToggle }) => (
  <nav className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-gray-800 mb-6 p-6 rounded-md">
    <div className="w-full block flex-grow">
      <div className="md:flex-grow">
        {languages.map((language) => (
          <Link
            to={`/${language.id}`}
            key={language.id}
            className="block md:inline-block text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-white mr-4"
          >
            {language.name}
          </Link>
        ))}
        <div className="block md:inline-block mr-4">
          <DarkModeButton
            isDarkMode={isDarkMode}
            onDarkModeToggle={onDarkModeToggle}
          />
        </div>
      </div>
    </div>
  </nav>
);

function mapStateToProps(state) {
  return {
    languages: state.languages,
  };
}

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);
