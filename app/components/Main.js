import React, {Component} from 'react';
import SearchGithub from './SearchGithub.js';
import Nav from './Nav.js';
import Profile from './Profile.js';

const Main = ({children, history}) => {
  console.log(this);
  return (
    <div>
      <Nav />
      <div className="row">
        <SearchGithub history={history}/>
      </div>
      <div className="container">
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Main;


// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <div className="container">
//           <div className="row">
//             {this.props.children}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
