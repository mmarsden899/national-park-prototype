import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-home" to="/">
          home
        </Link>
        {
          !auth0Client.isAuthenticated() &&
          <button className="signin-button" onClick={auth0Client.signIn}>Sign In</button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div className="profile-area">
            <label className="nickname">{auth0Client.getProfile().nickname}</label>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={() => {signOut()}} className="signout"/>
          </div>
        }
      </div>
      <div className="gradient">
      </div>
    </nav>
  )
}

export default withRouter(NavBar);
