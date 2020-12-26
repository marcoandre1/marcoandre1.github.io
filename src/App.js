import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedDashboard } from "./components/Dashboard";
import { ConnectedNavigation } from "./components/Navigation";
import { ConnectedFooter } from "./components/Footer";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.querySelector("html").classList.add("dark");
} else {
  document.querySelector("html").classList.remove("dark");
}

class App extends Component {
  lightMode() {
    document.querySelector("html").classList.remove("dark");
  }

  darkMode() {
    document.querySelector("html").classList.add("dark");
  }

  render() {
    return (
      <div className="mx-4 my-3 bg-white dark:bg-black rounded-md">
        <BrowserRouter>
          <Provider store={store}>
            <header>
              <ConnectedNavigation
                lightMode={this.lightMode}
                darkMode={this.darkMode}
              />
            </header>
            <main>
              <Route exact path={`/`} render={() => <ConnectedDashboard />} />
              <Route
                exact
                path={`/:id`}
                render={({ match }) => <ConnectedDashboard match={match} />}
              />
            </main>
            <ConnectedFooter />
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
