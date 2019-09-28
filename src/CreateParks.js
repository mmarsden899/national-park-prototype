import React, { Component } from 'react'
const parksData = require('./parks.json')

class CreateParks extends Component {

  componentDidMount () {
  }

  sendParks() {
    parksData.forEach(park => {
      console.log(park)
    })
  }


  render () {
    return (
      <div>
        <button onClick={this.sendParks}>Send Park</button>
      </div>
    )
  }
}

export default CreateParks
