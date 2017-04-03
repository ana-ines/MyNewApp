import React, { Component } from 'react';
import Notes from './Notes.js';

class AddNote extends React.Component {

  setRef(ref) {
    this.note = ref;
  }

  handleSubmit(){
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add new note" ref={(ref) => this.setRef(ref)}/>
        <span className="input-group-btn">
          <button className="btn btn-success" type="button" onClick={() => this.handleSubmit()}>
            Submit
          </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;