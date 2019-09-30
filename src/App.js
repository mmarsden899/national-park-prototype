import React from 'react';
import './App.scss';
import Parks from './Parks'
import Header from './Header'

// Admin
// import CreateParks from './Admin/CreateParks'

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header/>
        <Parks/>
      </div>
    </div>
  );
}

export default App;
