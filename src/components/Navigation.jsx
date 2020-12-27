import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MobileMenuButton from "./MobileMenuButton";
import DarkModeButton from "./DarkModeButton";

const Navigation = ({
  languages,
  isMenuOpen,
  onMobileMenuClick,
  isDarkMode,
  onDarkModeToggle,
}) => (
  <nav className="bg-gray-200 dark:bg-gray-800 rounded-md">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <MobileMenuButton
          isMenuOpen={isMenuOpen}
          onMobileMenuClick={onMobileMenuClick}
        />
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {languages.map((language) => (
                <Link
                  to={`/${language.id}`}
                  key={language.id}
                  className="text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {language.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <DarkModeButton
            isDarkMode={isDarkMode}
            onDarkModeToggle={onDarkModeToggle}
          />
        </div>
      </div>
    </div>
    <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {languages.map((language) => (
          <Link
            to={`/${language.id}`}
            key={language.id}
            className="text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            {language.name}
          </Link>
        ))}
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
