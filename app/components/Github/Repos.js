import React, {Component} from 'react';

class Repos extends React.Component {
  render() {
    return(
      <div>
        <h4>Repos</h4>
        <p>Repos: {this.props.repos}</p>
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;