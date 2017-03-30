import React, {Component} from 'react';
import NoteList from './NoteList.js';
import AddNote from './AddNote.js';

class Notes extends React.Component {
  render() {
    return(
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.AddNote} />
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;