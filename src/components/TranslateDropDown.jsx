import React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const TranslateDropDown = ({
  isTranslateMenuOpen,
  onTranslateToggle,
  languages,
}) => {
  return (
    <div className="ml-3 relative">
      <button
        id="user-menu"
        aria-haspopup={isTranslateMenuOpen}
        type="button"
        onClick={onTranslateToggle}
        className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span className="sr-only">Translate</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </button>

      <Transition
        show={isTranslateMenuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          {languages.map((language) => (
            <Link
              to={`/${language.id}`}
              key={language.id}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {language.name}
            </Link>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default TranslateDropDown;
