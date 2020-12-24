import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedDashboard } from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
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
              path={`/dashboard`}
              render={() => <ConnectedDashboard />}
            />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
