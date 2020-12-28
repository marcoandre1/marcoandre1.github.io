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
  constructor() {
    super();
    this.state = {
      isDarkMode:
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
      isMenuOpen: false,
    };
    // Binding method
    this.onDarkModeToggle = this.onDarkModeToggle.bind(this);
    this.onMobileMenuClick = this.onMobileMenuClick.bind(this);
  }

  onMobileMenuClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  onDarkModeToggle() {
    if (document.querySelector("html").classList.contains("dark")) {
      document.querySelector("html").classList.remove("dark");
    } else {
      document.querySelector("html").classList.add("dark");
    }
    this.setDarkMode();
  }

  setDarkMode() {
    this.setState({
      isDarkMode: document.querySelector("html").classList.contains("dark"),
    });
  }

  render() {
    return (
      <div className="bg-white dark:bg-black">
        <div className="px-4 py-3">
          <BrowserRouter>
            <Provider store={store}>
              <header>
                <ConnectedNavigation
                  isDarkMode={this.state.isDarkMode}
                  onDarkModeToggle={this.onDarkModeToggle}
                  isMenuOpen={this.state.isMenuOpen}
                  onMobileMenuClick={this.onMobileMenuClick}
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
      </div>
    );
  }
}

export default App;
