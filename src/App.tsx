import React, {useState, useEffect} from 'react';
// @ts-ignore
import { Button,Heading, MetaMaskButton, ToastMessage } from 'rimble-ui';

import './App.css';
import GameBoard from './components/GameBoard';

import logo from './assets/images/ethereumLogo.png';
import ModalAddress from './components/ModalAddress';
declare const window: any;

function App() {
  const [hasGameStarted, setGameStarted] = useState(false);
  const [isConnectionSuccess, setConnectionSuccess] = useState(false);
  const [isConnectionFailed, setConnectionFailed] = useState(false);
  const [friendAddress, setFriendAddress] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);


  function playAgainstFriend(){
    setModalOpen(true);

  }
  function playAgainstRandom(){
    setGameStarted(true);
    setFriendAddress('');
  }

  async function connectWithMetamask() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnectionSuccess(true);
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
        }
        setConnectionFailed(true);
      }
    }
  }
  function continueWithFriendAddress(address: string){
    setModalOpen(false);
    console.log("address")
    console.log(address);
    setFriendAddress(address);
    setGameStarted(true);
  }
  function closeModal(){
    setModalOpen(false);
  }
  

  return (
    <div className="App">
      {isConnectionSuccess &&
        <ToastMessage.Success
          my={3}
          message={"Connection successfully"}
          secondaryMessage={"Connected with your Metamask Account"}
          closeElem={true}
          onClick={()=>setConnectionSuccess(false)}
        />
      }
      {isConnectionFailed &&
        <ToastMessage.Failure
          my={3}
          message={"Connection failed"}
          secondaryMessage={"Something wrong with your connection"}
          closeElem={true}
        />
      }
        <MetaMaskButton size="medium" className="MetamaskButton" onClick={()=> connectWithMetamask()}>Connect with MetaMask</MetaMaskButton> 
        <Heading as={"h1"}>Heads or Tails on Ethereum</Heading>
        <ModalAddress 
            isModalOpen={isModalOpen} 
            methodToClose={()=> closeModal} 
            methodToContinue={continueWithFriendAddress}
        />
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
              <GameBoard friendAddress={friendAddress}/>
            </>
        }
    </div>
  );
}

export default App;
