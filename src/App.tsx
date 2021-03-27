import React from 'react';
// @ts-ignore
import { Button } from 'rimble-ui'
import './App.css';
import TossCoin from './components/TossCoin';

import logo from './assets/images/ethereumLogo.png';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Play the tails or heads game on Ethereum betting with friends or other people.
        </p>
        <Button size={'medium'}>Play with a friend</Button>
        <Button size={'medium'}>Play with anyone</Button>

        <TossCoin />
    </div>
  );
}

export default App;
