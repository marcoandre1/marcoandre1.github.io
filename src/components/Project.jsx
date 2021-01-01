import React from "react";
import ProfileImage from "./ProfileImage";

export default function Project({ id, bio, firstName, lastName }) {
  return (
    <div className="rounded overflow-hidden shadow-lg p-6">
      <div className="grid grid-cols-4 mb-6">
        <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
      </div>
      <div className="mb-6">
        <ProfileImage id={id} />
      </div>
      <div className="text-gray-600">{bio.substr(0, 70) + "..."}</div>
    </div>
  );
}
