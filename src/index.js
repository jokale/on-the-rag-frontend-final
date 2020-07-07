import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route}  from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Extra from './components/Extra'
import Help from './components/Help'
import Quiz from './components/Quiz'
import HeavyFlow from './components/HeavyFlow'
import MidFlow from './components/MidFlow'
import LightFlow from './components/LightFlow'


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router> 
     <center><Navbar /></center>
    <App />
    <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/extra" component={Extra} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/heavy" component={HeavyFlow} />
      <Route exact path="/light" component={LightFlow} />
      <Route exact path="/mid" component={MidFlow} />
      <Route exact path="/quiz" component={Quiz} />

    </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
