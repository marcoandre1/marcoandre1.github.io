import React from "react";
import GitHubButton from "./GitHubButton";
import ProjectImage from "./ProjectImage";

export default function Project({
  id,
  bio,
  name,
  image,
  url,
  repo,
  isDarkMode,
  language,
}) {
  let description = bio.find((bio) => bio.language === language.id);
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded overflow-hidden shadow-2xl p-6">
      <div className="grid grid-cols-4 mb-6">
        <div className="text-black dark:text-white hover:text-blue-700 dark:hover:text-indigo-300 font-bold text-lg col-span-3">
          <a href={url}>{`${name}`}</a>
        </div>
        <div className="flex justify-end">
          <GitHubButton isDarkMode={isDarkMode} repo={repo} />
        </div>
      </div>
      <div className="mb-6">
        <ProjectImage id={image} />
      </div>
      <div className="text-gray-600 dark:text-white">{description.text}</div>
    </div>
  );
}
