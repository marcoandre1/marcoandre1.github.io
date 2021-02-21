import React from "react";
import { useLocation } from "react-router-dom";

export default function NoMatch() {
  let location = useLocation();

  return (
    <div className="flex justify-center">
      <div class="h-screen -my-24 flex flex-wrap content-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <h2 className="font-bold text-gray-900 dark:text-white mb-2 flex justify-center">
              404 | This page could not be found.
            </h2>
            <h3 className="font-bold text-gray-600 dark:text-gray-300 flex justify-center">
              No match for{" "}
              <code className="bg-gray-200 dark:bg-indigo-600">
                {location.pathname}
              </code>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}