import React, {Component} from 'react';
import './App.scss';
import './Navbar.scss';
import Parks from './Parks'
import {Route} from 'react-router-dom';
import Header from './Header'
import NavBar from './NavBar'
import Callback from './Callback';
import Scroll from './Scroll'

// Admin
// import CreateParks from './Admin/CreateParks'

class App extends Component {
  render() {
  return (
    <div className="App">
      <NavBar/>
      <Scroll/>
      <div className="App-body">
        <Route exact path ="/" render={() => (
          <Header/>
        )} />
        <Route exact path="/" render={() => (
          <Parks/>
        )} />
      </div>
      <Route exact path='/callback' component={Callback}/>
    </div>
  )
}
}

export default App;
