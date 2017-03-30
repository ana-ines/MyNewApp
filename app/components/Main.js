import React, {Component} from 'react';
import Nav from './Nav.js';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;