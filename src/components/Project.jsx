import React from "react";
import ProfileImage from "./ProfileImage";

export default function Project({ id, bio, name, image }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded overflow-hidden shadow-lg p-6">
      <div className="grid grid-cols-4 mb-6">
        <div className="text-black dark:text-white font-bold text-lg col-span-3">{`${name}`}</div>
      </div>
      <div className="mb-6">
        <ProfileImage id={image} />
      </div>
      <div className="text-gray-600 dark:text-white">{bio}</div>
    </div>
  );
}
