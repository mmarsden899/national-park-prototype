import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import auth0Client from '../Auth'

class CreateUser extends Component {
  constructor (props) {
    super(props)

  this.state = {
  }
}

  async componentDidMount () {
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


  render () {
    return (
      <div>
        <button onClick={this.createUser}>Create User</button>
      </div>
    )
  }
}

export default CreateUser
