import React from "react";

export default function BioCard({
  id,
  firstTitle,
  firstContent,
  secondTite,
  secontContent,
}) {
  return (
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-gray-300 font-bold">
        {firstTitle}
      </div>
      <p className="mt-2 mb-2 text-left text-gray-600 dark:text-gray-400">
        {firstContent}
      </p>
      <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-gray-300 font-bold">
        {secondTite}
      </div>
      <p className="mt-2 mb-2 text-left text-gray-600 dark:text-gray-400">
        {secontContent}
      </p>
    </div>
  );
}
