import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const Dashboard = ({ language }) => (
  <div>
    <h2>{language.title}</h2>
    <ConnectedTaskList
      key={language.id}
      id={language.id}
      name={language.name}
      description={language.description}
    />
  </div>
);

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let language = state.languages.find((language) => language.id === id);

  return {
    id,
    language,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
