import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div  className='Portfolio-container'>
          <div className="portfolioItem" style={{backgroundColor: '#576CA8'}}>
            <p>INAB</p>
          </div>
          <div className="portfolioItem" style={{backgroundColor: '#0F4C5C'}}>
            <p>GOTEAM</p>
          </div>
          <div className="portfolioItem" style={{backgroundColor: '#DE3645'}}>
            <p>FOODR 3k</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
