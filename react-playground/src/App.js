import React from 'react';
import './App.css';
import Bomb from './state-drills/Bomb'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>YOUR APPLICATION NAME!</h1>
        <Bomb />
      </div>
    );
  }
}

export default App;



