import React, { Component } from "react";
import logo from "./logo.svg";
import profile from "./images/profile.png";
import "./App.css";
import { store } from "./store";

console.log(store.getState());

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
        <div className="flex justify-center">
          <div className="component-highlight max-w-sm rounded overflow-hidden shadow-lg items-center">
            <img className="w-full" src={profile} alt="Profile" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Marco E</div>
              <p className="text-gray-700 text-base">
                C# developer at day, Dragon Rider at night.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
              <div className="px-6 py-4 component-sub-highlight ">
                <button className="btn-blue">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
