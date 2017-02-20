import React, {Component} from 'react';
import {connectProfile} from '../auth';
import {Link} from 'react-router';
import './Home.css';
import Likes from '../containers/Likes'

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    return (
      <div className="Home">
        <div className="Home-intro">
          <h2>Welcome! You've now got a React app protected by Auth0.</h2>
          <p>Explore your <Link to="/profile/edit">profile</Link> or check out the <a href="https://auth0.com/docs/quickstart/spa/react">Auth0 docs</a> for more info.</p>
        <Likes />
        </div>
      </div>
    );
  }
}

export default connectProfile(Home);
