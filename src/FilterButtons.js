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
      <div className="filter-buttons">
        <button>All</button>
        <button>Visted</button>
        <button>Not-Visited</button>
      </div>
    )
  }
}

export default withRouter(FilterButtons);
