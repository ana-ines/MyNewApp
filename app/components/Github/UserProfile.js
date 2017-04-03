import React, {Component} from 'react';

const UserProfile = ({username, bio}) => {
  return(
    <div>
      {bio.avatar_url && <li className="list-group-item"><img src={bio.avatar_url} className="img-rounded img-responsive" /></li>}
      {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
      {bio.username && <li className="list-group-item">Userame: {bio.username}</li>}
      {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
    </div>
  )
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;