import React from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function NavBar(props) {
  console.log(window.location.origin);
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {!auth0Client.isAuthenticated() && (
          <FontAwesomeIcon
            icon={faSignInAlt}
            className="signout"
            onClick={auth0Client.signIn}
          />
        )}
        {auth0Client.isAuthenticated() && (
          <div className="profile-area">
            <label className="nickname">
              {auth0Client.getProfile().nickname}
            </label>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              onClick={() => {
                signOut();
              }}
              className="signout"
            />
          </div>
        )}
      </div>
      <div className="gradient"></div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </nav>
  );
}

export default withRouter(NavBar);
