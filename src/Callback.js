import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="callback-load">
        <p>Loading profile...</p>
      </div>
    );
  }
}

export default withRouter(Callback);
