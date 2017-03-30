import React, {Component} from 'react';

class UserProfile extends React.Component {
  render() {
    return(
      <div>
        <h4>User Profile</h4>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio.name}</p>
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;