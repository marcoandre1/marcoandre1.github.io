import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = ({ languages }) => (
  <nav className="flex items-center justify-between flex-wrap bg-gray-800 mb-6 p-6 rounded-md">
    <div className="w-full block flex-grow">
      <div className="md:flex-grow">
        {languages.map((language) => (
          <Link
            to={`/${language.id}`}
            key={language.id}
            className="block md:inline-block text-gray-300 hover:text-white mr-4"
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
