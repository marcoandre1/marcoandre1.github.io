import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MobileMenuButton from "./MobileMenuButton";
import DarkModeButton from "./DarkModeButton";
import logo from "../images/modokemdev-logo.svg";
import logoMark from "../images/modokemdev-logo-mark.svg";
import logoMarkBlackFont from "../images/modokemdev-logo-mark-black-font.svg";

const Navigation = ({
  languages,
  isMenuOpen,
  onMobileMenuClick,
  isDarkMode,
  onDarkModeToggle,
}) => (
  <nav className="bg-gray-200 dark:bg-gray-800 rounded-md mb-6">
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
              src={logo}
              alt="Workflow"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src={isDarkMode ? logoMark : logoMarkBlackFont}
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
            className="text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
