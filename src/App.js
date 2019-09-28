import React from 'react';
import './App.scss';

import Parks from './Parks'
import Header from './Header'
import CreateParks from './CreateParks'

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header/>
        <Parks/>
        <CreateParks/>
      </div>
    </div>
  );
}

export default App;
