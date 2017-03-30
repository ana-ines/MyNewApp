import React from 'react';
import Repos from './Github/Repos.js';
import Notes from './Notes/Notes.js';
import UserProfile from './Github/UserProfile.js';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

class Profile extends React.Component {
  mixin: [ReactFireMixin]

  constructor(props) {
    super(props);
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: 'Pirulito'
      },
      repos: ['a', 'b', 'c']
    };
  }

  componentDidMount() {
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray()(childRef, 'notes');
  }

  componentWillUnmount() {
    this.unbind('notes');
  }

  handleAddNote(newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes 
            username={this.props.params.username} 
            notes={this.state.notes} 
            addNote={this.handleAddNote}/>
        </div>
      </div>
    );
  }
}

export default Profile;