import React,{PropTypes} from 'react'
import { browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import UserIconMenu from './UserIconMenu'

const Navbar = (props) => {

  const handleTouchTap = () => browserHistory.push('/')

  const {login, logout, isAuthenticated, profile} = props

  const styles = {
  title: {
    cursor: 'pointer',
    },
  }

  const renderUserControls = () => {
    if (isAuthenticated) {
      return (
        <UserIconMenu picture={profile.picture} logout={logout}/>
      )
    }
    else {
      return (
        <FlatButton label="login" onClick={ ()=>login() } />
      )
    }
  }

  const userControls = renderUserControls()

  return(
    <AppBar
      title={<span style={styles.title}>Collab App</span>}
      onTitleTouchTap={handleTouchTap}
      style={{background:"#262626"}}
      iconElementRight={userControls}
    />
  )
}

Navbar.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
}

export default Navbar
