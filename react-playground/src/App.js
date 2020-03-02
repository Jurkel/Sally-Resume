import React from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>YOUR APPLICATION NAME!</h1>
        <TheDate>
          <div></div>
        </TheDate>
        <Counter />
      </div>
    );
  }
}

export default App;



