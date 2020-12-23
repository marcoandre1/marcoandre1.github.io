import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedDashboard } from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedNavigation } from "./components/Navigation";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-red-500">
            Hello! My name is Marco E (aka modokem, modokemdev, meltinglight).
          </p>
          <p>This personal website is under construction.</p>
          <p>2020 update! (One more time!)</p>
        </header>
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
      </div>
    );
  }
}

export default App;
