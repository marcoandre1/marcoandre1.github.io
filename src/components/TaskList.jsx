import React from "react";
import { connect } from "react-redux";
import profile from "../images/profile.png";

export const TaskList = ({ name, description }) => (
  <div className="component-highlight max-w-sm rounded overflow-hidden shadow-lg items-center">
    <img className="w-full" src={profile} alt="Profile" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-gray-600 dark:text-gray-300 mb-2">
        {name}
      </div>
      <p className="text-gray-700 dark:text-gray-400 text-base">
        {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #photography
      </span>
      <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #travel
      </span>
      <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #winter
      </span>
      <div className="px-6 py-4 component-sub-highlight ">
        <button className="btn-blue">Subscribe</button>
      </div>
    </div>
  </div>
);

export const ConnectedTaskList = connect((state) => state)(TaskList);
