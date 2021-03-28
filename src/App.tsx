import React, {useState} from 'react';
// @ts-ignore
import { Button,Heading, MetaMaskButton } from 'rimble-ui';
import './App.css';
import GameBoard from './components/GameBoard';

import logo from './assets/images/ethereumLogo.png';

function App() {
  const [hasGameStarted, setGameStarted] = useState(false);
  const [isPlayingAgainstFriend, setPlayingAgainstFriend] = useState(false);
  

  function playAgainstFriend(){
    setGameStarted(true);
    setPlayingAgainstFriend(true);

  }
  function playAgainstRandom(){
    setGameStarted(true);
    setPlayingAgainstFriend(false);
  }
  return (
    <div className="App">
        <MetaMaskButton>Connect with MetaMask</MetaMaskButton>
        <Heading as={"h1"}>Heads or Tails on Ethereum</Heading>
        {!hasGameStarted && 
          <>
            <img src={logo} className="AppLogo" alt="logo" />
            <Heading as={"h4"}>Play the tails or heads game on Ethereum betting with a friend or other people.</Heading>
            <div className="ButtonContainer">
              <Button size={'medium'} onClick={()=> playAgainstFriend()}>Play against a friend</Button>
              <Button size={'medium'} onClick={()=> playAgainstRandom()}>Play against a random</Button>
            </div>
          </>
        }
        {hasGameStarted && 
            <>
              <GameBoard isPlayingAgainstFriend={isPlayingAgainstFriend}/>
            </>
        }
    </div>
  );
}

export default App;
