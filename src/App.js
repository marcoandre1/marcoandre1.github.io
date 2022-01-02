import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedDashboard } from "./components/Dashboard";
import { ConnectedNavigation } from "./components/Navigation";
import { ConnectedFooter } from "./components/Footer";
import NoMatch from "./components/NoMatch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
      isMenuOpen: false,
      isTranslateMenuOpen: false,
      languageId: "en",
    };
    // Binding method
    // This binding is necessary to make `this` work in the callback
    this.onDarkModeToggle = this.onDarkModeToggle.bind(this);
    this.onMobileMenuClick = this.onMobileMenuClick.bind(this);
    this.onTranslateToggle = this.onTranslateToggle.bind(this);
    this.handleLanguageClick = this.handleLanguageClick.bind(this);
  }

  componentDidMount() {
    this.setInitialDarkMode();
    this.setInitialLanguage();
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

  setInitialLanguage() {
    let urlPathname = window.location.pathname;
    let languageId;
    if (urlPathname === undefined) {
      languageId = "na";
    } else {
      if (
        urlPathname.indexOf("/en") === 0 ||
        (urlPathname.indexOf("/") === 0 && urlPathname.length === 1) ||
        urlPathname === ""
      ) {
        languageId = "en";
      } else if (urlPathname.indexOf("/fr") === 0) {
        languageId = "fr";
      } else if (urlPathname.indexOf("/es") === 0) {
        languageId = "es";
      } else {
        languageId = "na";
      }
    }
    this.setLanguage(languageId);
  }

  onMobileMenuClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  onTranslateToggle() {
    this.setState({
      isTranslateMenuOpen: !this.state.isTranslateMenuOpen,
    });
  }

  onDarkModeToggle() {
    if (document.querySelector("html").classList.contains("dark")) {
      document.querySelector("html").classList.remove("dark");
      if (localStorage.theme === undefined) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.theme = "light";
      }
    } else {
      document.querySelector("html").classList.add("dark");
      if (localStorage.theme === undefined) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.theme = "dark";
      }
    }
    this.setDarkMode();
  }

  handleLanguageClick(languageId) {
    this.setLanguage(languageId);
  }

  setDarkMode() {
    this.setState({
      isDarkMode: document.querySelector("html").classList.contains("dark"),
    });
  }

  setLanguage(languageId) {
    this.setState({
      languageId: languageId,
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
                  isTranslateMenuOpen={this.state.isTranslateMenuOpen}
                  onTranslateToggle={this.onTranslateToggle}
                  languageId={this.state.languageId}
                  handleLanguageClick={this.handleLanguageClick}
                />
              </header>
              <main>
                <Switch>
                  <Route exact path={`/`}>
                    <Redirect to="/en" />
                  </Route>
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
                  <Route exact path="/:id/*" render={() => <NoMatch />} />
                </Switch>
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
