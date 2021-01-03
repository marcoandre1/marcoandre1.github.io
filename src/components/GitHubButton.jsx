import React from "react";
import GitHubMark from "../images/GitHub-Mark-64px.png";
import GitHubMarkLight from "../images/GitHub-Mark-Light-64px.png";

export default function GitHubButton({ isDarkMode, repo }) {
  return (
    <div className="w-7">
      <a href={repo}>
        <img
          src={isDarkMode ? GitHubMarkLight : GitHubMark}
          alt="GitHub Mark"
        />
      </a>
    </div>
  );
}
