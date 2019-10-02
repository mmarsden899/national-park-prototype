import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FilterButtons extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }
  render() {
    return (
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    )
  }
}

export default withRouter(FilterButtons);
