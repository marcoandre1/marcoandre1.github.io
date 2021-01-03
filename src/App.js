import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedDashboard } from "./components/Dashboard";
import { ConnectedNavigation } from "./components/Navigation";
import { ConnectedFooter } from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
      isMenuOpen: false,
    };
    // Binding method
    this.onDarkModeToggle = this.onDarkModeToggle.bind(this);
    this.onMobileMenuClick = this.onMobileMenuClick.bind(this);
  }

  componentDidMount() {
    this.setInitialDarkMode();
  }

  setInitialDarkMode() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    this.setDarkMode();
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
                <Route
                  exact
                  path={`/`}
                  render={() => (
                    <ConnectedDashboard isDarkMode={this.state.isDarkMode} />
                  )}
                />
                <Route
                  exact
                  path={`/:id`}
                  render={({ match }) => (
                    <ConnectedDashboard
                      match={match}
                      isDarkMode={this.state.isDarkMode}
                    />
                  )}
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
