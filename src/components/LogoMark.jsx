import React from "react";
import logo from "../images/modokemdev-logo.svg";
import logoMark from "../images/modokemdev-logo-mark.svg";
import logoMarkBlackFont from "../images/modokemdev-logo-mark-black-font.svg";

const LogoMark = ({ isDarkMode }) => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img className="block lg:hidden h-8 w-auto" src={logo} alt="Workflow" />
      <img
        className="hidden lg:block h-8 w-auto"
        src={isDarkMode ? logoMark : logoMarkBlackFont}
        alt="Workflow"
      />
    </div>
  );
};

export default LogoMark;
