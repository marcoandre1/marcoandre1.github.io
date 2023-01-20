import React from "react";
import { connect } from "react-redux";
import profile from "../images/profile.png";
import BioImage from "./BioImage";
import BioCard from "./BioCard";

export const BioContainer = ({ id, description, bios }) => (
  <div className="md:flex bg-gray-100 dark:bg-gray-900 rounded-xl p-8 md:p-0">
    <div className="bg-gray-100 dark:bg-gray-800 md:w-full md:h-auto md:rounded-xl rounded-xl shadow-2xl mx-auto md:ml-4 md:my-4 p-8 md:p-4">
      <BioImage id={profile} />
      <div className="px-4 py-4 md:px-2">
        <div className="font-bold text-xl text-gray-600 dark:text-gray-300 mb-2">
          ModokemDev
        </div>
        <p className="text-gray-700 dark:text-gray-400 text-base">
          {description}
        </p>
      </div>
      <div className="px-4 md:px-0 pt-4 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #C#
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #JavaScript
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Ruby
        </span>
      </div>
    </div>
    {bios
      .filter((rec) => rec.language === id)
      .map((bio) => (
        <BioCard key={bio.id} {...bio} />
      ))}
  </div>
);

function mapStateToProps(state) {
  return {
    bios: state.bios,
  };
}

export const ConnectedBioContainer = connect(mapStateToProps)(BioContainer);
