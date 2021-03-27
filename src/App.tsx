import React from 'react';
import logo from './assets/images/ethereumLogo.png';
// @ts-ignore
import { Button } from 'rimble-ui'
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Play the tails or heads game on Ethereum betting with friends or other people.
        </p>
        <Button size={'medium'}>Play with a friend</Button>
        <Button size={'medium'}>Play with anyone</Button>
    </div>
  );
}

export default App;
