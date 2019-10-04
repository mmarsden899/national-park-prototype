import React, { Component } from 'react'
import axios from 'axios'
import SinglePark from './SinglePark'
import apiUrl from './apiConfig'
import auth0Client from './Auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

class Parks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parks: [],
      filter: [],
      modal: false,
      selectedTarget: '',
      user: {
        list: []
      }
    }
     this.getUser = this.getUser.bind(this)
  }

  async componentDidMount () {
    const parkResponse = await axios(`${apiUrl}/parks`)
    this.setState({ parks: parkResponse.data.parks, filter: parkResponse.data.parks })
    const temp = {list: []}
    console.log(parkResponse)
    this.setState({ user: temp})
    this.getUser()
  }

  async getUser () {
    if (auth0Client.isAuthenticated()) {
      const userResponse = await axios(`${apiUrl}/users/${auth0Client.getProfile().nickname}`)
      if (userResponse.data.User.length < 1) {
        this.createUser()
        .then(this.getUser)
      } else {
      this.setState({user: userResponse.data.User[0]})
      }
    }
  }

  async createUser() {
      await axios({
        url: apiUrl + '/users',
        method: 'POST',
        data: {
          user: {
            nickname: auth0Client.getProfile().nickname
          }
        }
      })
  }

  openModal = event => {
    this.setState({ modal: !this.state.modal, selectedTarget: event.currentTarget.id })
  }

  closeModal = () => {
    if (this.state.modal) {
    this.setState({modal: false})
    }
  }

  handleVisit = async event => {
  const id = event.target.id
  await axios({
    url: apiUrl + `/Users/${this.state.user.nickname}`,
    method: 'PATCH',
    data: {
      user: {
        list: id
      }
    }
  })
  this.getUser()
}

  visited = () => {
    const filter = this.state.parks.filter((park) => {
      return this.state.user.list.includes(park._id)
    })
    this.setState({filter: filter})
  }

  notVisited = () => {
    const filter = this.state.parks.filter((park) => {
      return !this.state.user.list.includes(park._id)
    })
    this.setState({filter: filter})
  }

  all = () => {
    this.setState({filter: this.state.parks })
  }


  render () {
    const { filter } = this.state
    const { list } = this.state.user
    const filler =
      <div className="filler">
      </div>
    const buttonsHTML =
      <div className="filter-buttons-div">
        <button onClick={this.all} className="filter-buttons">All</button>
        <button onClick={this.visited} className="filter-buttons">Visted</button>
        <button onClick={this.notVisited} className="filter-buttons">Not-Visited</button>
      </div>
    const parksHTML = filter.map(park => (
      <div key={park._id} id={park._id} className="parks">
      {auth0Client.isAuthenticated() ? (list.includes(park._id) ?
      <FontAwesomeIcon icon={faMinusCircle} onClick={this.handleVisit} id={park._id} className="plusOrMinus"/>
    : <FontAwesomeIcon icon={faPlusCircle} onClick={this.handleVisit} id={park._id} className="plusOrMinus"/>) : null}
        <div className="park-container"onClick={this.openModal} id={park._id}>
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
        {auth0Client.isAuthenticated() ? buttonsHTML : filler}
        {parksHTML}
        {this.state.modal ? <SinglePark target={this.state.selectedTarget}/> : null}
      </div>
    )
  }
}

export default Parks
