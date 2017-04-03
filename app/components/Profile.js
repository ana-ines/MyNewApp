import React from 'react';
import Repos from './Github/Repos.js';
import Notes from './Notes/Notes.js';
import UserProfile from './Github/UserProfile.js';
import getGithubInfo from './utils/helpers.js';
import Rebase from 're-base';
import SearchGithub from './SearchGithub.js';


const base = Rebase.createClass({
  apiKey: "",
  authDomain: "",
  databaseURL: 'https://reacttest.firebaseio.com/',
  storageBucket: ""
});

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }

  componenWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  componentDidMount() {
    this.init(this.props.params.username);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  
  init(username){
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
        console.log(data);
      }.bind(this))
  }

  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })
  }

  render() {
    return (
      <div>
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
              addNote={ (newNote) => this.handleAddNote(newNote) }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;