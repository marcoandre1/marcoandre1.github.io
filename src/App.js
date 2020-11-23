import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-red-500">
            Hello! My name is Marco E (aka modokem, modokemdev, meltinglight).
          </p>
          <p>
            This personal website is under construction.
          </p>
          <p>
            2020 update! (One more time!)
          </p>
        </header>
        <div className="px-6 py-4 component-sub-highlight ">
          <button className="btn-blue">Subscribe</button>
        </div>
      </div>
    );
  }
}

export default App;
