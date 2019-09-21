import React, { Component } from 'react'
const parksData = require('./parks.json')

class SinglePark extends Component {
  constructor (props) {
    super(props)

    this.state = {
      park: {},
      parkName: props.target
    }
  }

  componentDidMount () {
    const {parkName} = this.state
    const specificPark = parksData.filter(function (park) {
      return park.Name === parkName
    })
    this.setState({ park: specificPark[0]})
  }


  render () {
    return (
      <div className="park-modal">
      <div className="single-park-flex">
        <div className="park-image-container">
          <img
            src={this.state.park.Image}
            alt="temp"
            className="modal-image"/>
            </div>
        <div className="park-info">
          <h3 className="modal-header">{this.state.park.Name}</h3>
          <h6 className="modal-sub-header"><i>{this.state.park.Location}</i></h6>
          <div className="modal-resp">
            <p className="info thirty-padding-top est"><b>Established: </b>{this.state.park.Established}</p>
            <p className="info area"><b>Area: </b>{this.state.park.Area}</p>
            <p className="info vis"><b>Total Visitors: </b>{this.state.park['Recreation visitors']}</p>
          </div>
          <p className="modal-park-desc">{this.state.park.Description}</p>
        </div>
        </div>
      </div>
    )
  }
}

export default SinglePark
