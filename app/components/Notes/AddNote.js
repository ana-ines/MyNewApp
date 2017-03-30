import React, { Component } from 'react';

class AddNote extends React.Component {

  setTef(ref) {
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
        <input type="text" className="form-control" placeholder="Add new note" ref={this.setRef}/>
        <span className="input-group-btn">
          <button className="btn btn-success" type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </span>
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;