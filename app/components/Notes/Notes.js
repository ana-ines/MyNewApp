import React, {Component} from 'react';
import NoteList from './NoteList.js';
import AddNote from './AddNote.js';

const Notes = ({username, notes, addNote}) => {
  return(
    <div>
      <h3>Notes for {username}</h3>
      <AddNote username={username} addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;