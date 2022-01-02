import React from "react";

export default function PageNotFound({ id }) {
  return (
    <div className="flex justify-center">
      <div className="h-screen -my-24 flex flex-wrap content-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <h2 className="font-bold text-gray-900 dark:text-white mb-2 flex justify-center">
              404 | This page could not be found.
            </h2>
            <div className="font-bold text-gray-600 dark:text-gray-300 flex justify-center">
              The path,{" "}
              <span className="bg-gray-200 dark:bg-indigo-600">/{id}</span>, did
              not match any route.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
