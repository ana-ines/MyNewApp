import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Main from '../components/Main.js';
import Home from '../components/Home.js';
import Profile from '../components/Profile.js';


export default (
  <Router history={history} path="/" component={Main} >
    <Route path="/profile/:username" component={Profile}/>
    <IndexRoute component={Home} />
  </Router>
);