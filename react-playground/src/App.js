import React from 'react';
import './App.css';
import TheDate from './state/TheDate';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>YOUR APPLICATION NAME!</h1>
        <TheDate>
          <div></div>
        </TheDate>
      </div>
    );
  }
}

export default App;



