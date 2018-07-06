import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="http://via.placeholder.com/350x150?text=1" alt='one' />
        <img src="http://via.placeholder.com/350x150?text=2"  alt='two' />
        <img src="http://via.placeholder.com/350x150?text=3" alt='three' />
        <br />
        <button>prev</button>
        <button>next</button>
      </div>
    );
  }
}

export default App;
