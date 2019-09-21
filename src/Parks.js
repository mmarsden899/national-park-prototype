import React, { Component } from 'react'
import SinglePark from './SinglePark'
const parksData = require('./parks.json')

class Parks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parks: [],
      modal: false,
      selectedTarget: ''
    }
  }

  componentDidMount () {
    this.setState({ parks: parksData })
  }

  openModal = event => {
    this.setState({ modal: !this.state.modal, selectedTarget: event.currentTarget.id })
  }

  closeModal = () => {
    this.setState({modal: !this.state.modal})
  }


  render () {
    console.log(this.state.parks)
    const { parks } = this.state
    const parksHTML = parks.map(park => (
      <div key={park.Name} onClick={this.openModal} id={park.Name} data={park} className="parks">
        <div className="park-container">
        <img src={park.Thumbnail}
             alt={"thumbnail of " + park.Name}
             className="park-thumbnail"/>
          <div className="info-grid">
            <p className="park-name">{park.Name} National Park</p>
            <p className="info"> <b>Location:</b> {park.Location} <b>Founded:</b> {park.Established}</p>
            <p className="info"> <b>Total Area:</b> {park.Area} <b>Total Visitors:</b> {park["Recreation visitors"]}</p>
            <p className="info desc">{park.Description}</p>
          </div>
        </div>
      </div>
    ))
    return (
      <div className="container" onClick={this.closeModal}>
        {parksHTML}
        {this.state.modal ? <SinglePark target={this.state.selectedTarget}/> : null}
      </div>
    )
  }
}

export default Parks
