import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

console.log (store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
