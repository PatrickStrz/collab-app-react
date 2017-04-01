import React, {Component} from 'react';
import {connectProfile} from '../auth';
// import {Link} from 'react-router';
import Problems from '../containers/Problems'
import MyAwesomeReactComponent from '../components/MyAwesomeReactComponent'

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {
    return (
      <div>
        {/* <p><Link to="/profile/edit">profile</Link> | <a href="https://auth0.com/docs/quickstart/spa/react">Auth0 docs</a></p> */}
        <Problems />
        <MyAwesomeReactComponent />
      </div>
    );
  }
}

export default connectProfile(Home);
