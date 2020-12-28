import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const Dashboard = ({ language }) => (
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
);

function mapStateToProps(state, ownProps) {
  let id = ownProps.match === undefined ? "en" : ownProps.match.params.id;
  let language = state.languages.find((language) => language.id === id);

  return {
    id,
    language,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
