import React from "react";
import GitHubButton from "./GitHubButton";
import ProfileImage from "./ProfileImage";

export default function Project({
  id,
  bio,
  name,
  image,
  url,
  repo,
  isDarkMode,
}) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded overflow-hidden shadow-lg p-6">
      <div className="grid grid-cols-4 mb-6">
        <div className="text-black dark:text-white hover:text-blue-700 dark:hover:text-indigo-300 font-bold text-lg col-span-3">
          <a href={url}>{`${name}`}</a>
        </div>
        <div className="flex justify-end">
          <GitHubButton isDarkMode={isDarkMode} repo={repo} />
        </div>
      </div>
      <div className="mb-6">
        <ProfileImage id={image} />
      </div>
      <div className="text-gray-600 dark:text-white">{bio}</div>
    </div>
  );
}
