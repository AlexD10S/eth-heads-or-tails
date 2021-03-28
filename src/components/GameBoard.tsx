import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import { Button,Heading, Input } from 'rimble-ui';
import Web3 from 'web3';
import TossCoin from './TossCoin';
import PickCoin from './PickCoin';
import HeadsOrTailsSC from "../blockchain/HeadsOrTailsSC";
import {StartGame} from '../models/dtos';
import * as utils from '../utils/utils';

interface Props {
    friendAddress: string;
}
function GameBoard(props: Props) {
    const [isMyTurnToTossCoin, setTurn] = useState(true);
    const [coinPicked, setCoinPicked] = useState('');

    useEffect(() => {
        const getIsMyTurn = async () => {
            const sc = HeadsOrTailsSC.Instance;
            const startGame: StartGame = await sc.getGameAgainstFriend(props.friendAddress);
            setTurn(startGame.started)
        }
        getIsMyTurn();
    },[]);

    async function send () {
        console.log("send result");
        if(isMyTurnToTossCoin){
            //Send result of the coin tossed to SC
        }
        else{
            //Calculate random, make hash with commitmennt and send to SC
            console.log(coinPicked);
            const coinValue = utils.getCoinValue(coinPicked);
            const nonce = utils.generateRandom();
            const commitment = utils.makeCommitment(coinValue, nonce);
        }
       
    }

    return(
        <div>
            {isMyTurnToTossCoin &&
              <>
                <Heading as={"h4"}>You have to toss the coin, your adversary has already chosen.</Heading>
                <Heading as={"h6"}>{coinPicked === '' ? 
                    "Click into the ETH coin to toss it." :
                    'The result has been: ' + coinPicked}
                </Heading>
                <TossCoin coinPicked={coinPicked} setCoinPicked={setCoinPicked}/>
              </>
            }
            {!isMyTurnToTossCoin &&
              <>
                <Heading as={"h4"}>Pick your election, your adversary will toss the coin.</Heading>
                <Heading as={"h6"}>Click into the coin you want to pick.</Heading>
                <PickCoin coinPicked={coinPicked} setCoinPicked={setCoinPicked}/>
              </>
            }
            <Button icon="Send" mr={3} disabled={coinPicked === ''} onClick={()=> send()}>
                Send
            </Button>
        </div>
    );
}

export default GameBoard;


