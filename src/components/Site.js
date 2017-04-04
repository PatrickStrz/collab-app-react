import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connectProfile, logout} from '../auth';
import './Site.css';
import Navbar from './Navbar'
class Site extends Component {
  static propTypes = {
    ...connectProfile.PropTypes,
    children: PropTypes.any
  };

  render() {
    return (
      <div className="Site">
        {/* <div className="Site-header"> */}
          {/* <img src={logo} className="Site-logo" alt="logo" /> */}
          {/* {this.renderUserControls()} */}
        {/* </div> */}
        <Navbar />
        <div className="Site-page">
          {this.props.children}
        </div>
      </div>
    );
  }

  renderUserControls() {
    const {profile} = this.props;

    if (profile) {
      return (
        <div className="Site-profileControls">
          <img className="Site-profilePicture" src={profile.picture} alt={profile.nickname} />
          <Link to="/profile/edit">{profile.nickname}</Link> &middot; <a onClick={() => logout()}>Log Out</a>
        </div>
      );
    } else {
      return (
        <div className="Site-profileControls">
           <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default connectProfile(Site);
