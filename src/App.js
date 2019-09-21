import React from 'react';
import './App.scss';

import Parks from './Parks'
import Header from './Header'

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
