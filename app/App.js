import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import routes from './config/routes';

ReactDom.render(
  <Router>{routes}</Router>
  , document.getElementById('app')
)

