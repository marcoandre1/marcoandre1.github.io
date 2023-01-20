import React from "react";
import logo from "../images/modokemdev-logo.svg";
import logoName from "../images/modokemdev-logo-mark.svg";
import logoNameBlackFont from "../images/modokemdev-logo-mark-black-font.svg";

const LogoName = ({ isDarkMode }) => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img className="block lg:hidden h-8 w-auto" src={logo} alt="Workflow" />
      <img
        className="hidden lg:block h-8 w-auto"
        src={isDarkMode ? logoName : logoNameBlackFont}
        alt="Workflow"
      />
    </div>
  );
};

export default LogoName;
