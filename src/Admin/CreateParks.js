import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
const parksData = require('./parks.json')

class CreateParks extends Component {

  componentDidMount () {
  }

  sendParks() {
    parksData.forEach(park => {
      axios({
        url: apiUrl + '/parks',
        method: 'POST',
        data: {
          park: {
            name: park.Name,
            image: park.Image,
            location: park.Location,
            established: park.Established,
            area: park.Area,
            rec_visitors: park['Recreation visitors'],
            description: park.Description
          }
        }
      })
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
