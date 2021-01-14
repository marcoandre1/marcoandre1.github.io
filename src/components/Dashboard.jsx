import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";
import { ConnectedProjects } from "./Projects";
import { Helmet } from "react-helmet";
import PageNotFound from "./PageNotFound";

export const Dashboard = ({ id, language, isValidRequest, isDarkMode }) => (
  <div>
    <Helmet>
      <title>{language.htmlTitle}</title>
    </Helmet>
    {isValidRequest && (
      <div>
        <div>
          <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6">
            {language.title}
          </h2>
          <ConnectedTaskList key={language.id} {...language} />
        </div>
        <div>
          <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6">
            {language.subTitle}
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

function mapStateToProps(state, ownProps) {
  let id = ownProps.match === undefined ? "en" : ownProps.match.params.id;
  let language = state.languages.find((language) => language.id === id);
  let isValidRequest = true;

  if (language === undefined) {
    language = state.pageNotFound.find((notFound) => notFound.id === 404);
    isValidRequest = false;
  }

  return {
    id,
    language,
    isValidRequest,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
