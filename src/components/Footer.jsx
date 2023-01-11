import { connect } from "react-redux";
import React from "react";

const Footer = () => (
  <div className="bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-300 rounded-md mt-6 p-6 flex justify-center">
    ModokemDev © 2023
  </div>
);

export const ConnectedFooter = connect((state) => state)(Footer);
