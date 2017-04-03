import React, {Component} from 'react';
import Home from './Home.js';
import Profile from './Profile.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

const Nav = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="#">Home<span className="sr-only">(current)</span></Link></li>
        </ul>
      </div>
    </nav>
  )
}
          // <li><Link to="/profile/:username" style={{color: 'grey'}} activeStyle={{backgroundColor: '#ffe425', color: 'black', fontWeight: 'bold'}}>Perfil</Link></li>

export default Nav;