import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";
import { Helmet } from "react-helmet";
import PageNotFound from "./PageNotFound";

export const Dashboard = ({ language, isValidRequest }) => (
  <div>
    <Helmet>
      <title>{language.htmlTitle}</title>
    </Helmet>
    {isValidRequest && (
      <div>
        <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6">
          {language.title}
        </h2>
        <ConnectedTaskList
          key={language.id}
          id={language.id}
          name={language.name}
          description={language.description}
        />
      </div>
    )}
    {!isValidRequest && (
      <div>
        <PageNotFound />
      </div>
    )}
  </div>
);

function mapStateToProps(state, ownProps) {
  let id = ownProps.match === undefined ? "en" : ownProps.match.params.id;
  let language = state.languages.find((language) => language.id === id);
  let isValidRequest = true;

  if (language === undefined) {
    // id contains the /asdf
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
