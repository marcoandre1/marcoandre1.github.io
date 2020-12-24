import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedDashboard } from "./components/Dashboard";
import { ConnectedNavigation } from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="flex">
            <ConnectedNavigation />
            <Route
              exact
              path={`/:id`}
              render={({ match }) => <ConnectedDashboard match={match} />}
            />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
