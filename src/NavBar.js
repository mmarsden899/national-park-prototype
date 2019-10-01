import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-home" to="/">
          home
        </Link>
        {
          !auth0Client.isAuthenticated() &&
          <button className="" onClick={auth0Client.signIn}>Sign In</button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <label className="">{auth0Client.getProfile().name}</label>
            <button className="" onClick={() => {signOut()}}>Sign Out</button>
          </div>
        }
      </div>
      <div className="gradient">
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
