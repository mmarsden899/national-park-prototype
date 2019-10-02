import React, { Component } from 'react'
import axios from 'axios'
import SinglePark from './SinglePark'
import apiUrl from './apiConfig'
import auth0Client from './Auth';

class Parks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parks: [],
      modal: false,
      selectedTarget: ''
    }
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/parks`)
    this.setState({ parks: response.data.parks })
    console.log(auth0Client.getProfile())
  }

  openModal = event => {
    this.setState({ modal: !this.state.modal, selectedTarget: event.currentTarget.id })
  }

  closeModal = () => {
    if (this.state.modal) {
    this.setState({modal: false})
    }
  }


  render () {
    const { parks } = this.state
    const parksHTML = parks.map(park => (
      <div key={park._id} onClick={this.openModal} id={park._id} className="parks">
        <div className="park-container">
        <img src={park.thumbnail}
             alt={"thumbnail of " + park.name}
             className="park-thumbnail"/>
          <div className="info-grid">
            <p className="park-name">{park.name} National Park</p>
            <p className="info"> <b>Location:</b> {park.location} <b>Founded:</b> {park.established}</p>
            <p className="info"> <b>Total Area:</b> {park.area} <b>Total Visitors:</b> {park.rec_visitors}</p>
            <p className="info desc">{park.description}</p>
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
