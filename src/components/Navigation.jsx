import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="header">
    <Link to={`/dashboard`}>
      <h1>Daily Organizer</h1>
    </Link>
  </div>
);

export const ConnectedNavigation = connect((state) => state)(Navigation);
