import React from "react";
import { useSelector } from "react-redux";
import { ConnectedTaskList } from "./TaskList";
import { ConnectedProjects } from "./Projects";
import { Helmet } from "react-helmet";
import PageNotFound from "./PageNotFound";
import { useParams } from "react-router-dom";

export const Dashboard = ({ isDarkMode }) => {
  let { id } = useParams();

  if (id === undefined) {
    id = "en";
  }

  let language = useSelector(
    (state) =>
      state.languages.find((language) => language.id === id) ??
      state.pageNotFound.find((notFound) => notFound.id === 404)
  );

  let isValidRequest = language.id === 404 ? false : true;

  return (
    <div>
      <Helmet>
        <title>{language.htmlTitle}</title>
      </Helmet>
      {isValidRequest && (
        <div>
          <h1
            id={`${language.pageTitle}`}
            className="group flex font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6"
          >
            {language.pageTitle}
          </h1>
          <div>
            <h2
              id={`${language.aboutAnchorLabel}`}
              className="group flex font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6"
            >
              <a
                className="absolute mt-2 -ml-6 flex items-center opacity-0 border-0 group-hover:opacity-100"
                href={`#${language.aboutAnchorLabel}`}
                aria-label="Anchor"
              >
                <div className="w-5 text-gray-400 ring-1 ring-gray-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-gray-900/10 hover:shadow hover:text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0 dark:hover:text-white">
                  <svg width="17" height="16" fill="none" aria-hidden="true">
                    <path
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
              </a>
              {language.aboutSubTitle}
            </h2>
            <ConnectedTaskList key={language.id} {...language} />
          </div>
          <div className="pt-3">
            <h2
              id={`${language.projectAnchorLabel}`}
              className="group flex font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6"
            >
              <a
                className="absolute mt-2 -ml-6 flex items-center opacity-0 border-0 group-hover:opacity-100"
                href={`#${language.projectAnchorLabel}`}
                aria-label="Anchor"
              >
                <div className="w-5 text-gray-400 ring-1 ring-gray-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-gray-900/10 hover:shadow hover:text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0 dark:hover:text-white">
                  <svg width="17" height="16" fill="none" aria-hidden="true">
                    <path
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
              </a>
              {language.projectSubTitle}
            </h2>
            <ConnectedProjects isDarkMode={isDarkMode} language={language} />
          </div>
        </div>
      )}
      {!isValidRequest && (
        <div>
          <PageNotFound id={id} />
        </div>
      )}
    </div>
  );
};
