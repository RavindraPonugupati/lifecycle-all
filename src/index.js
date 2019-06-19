import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LifeCycle from './LifeCycle';
import ClassBaseComponent from './ClassBaseComponent';
import Clock from './Clock';
 import HandlingEvents from './HandlingEvents';
import HandlingEvents1 from './HandlingEvents1';
import HandlingEvents2 from './HandlingEvents2';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<LifeCycle />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
