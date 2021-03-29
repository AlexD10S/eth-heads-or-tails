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
    friendAddress: any;
}
function GameBoard(props: Props) {
    const [isMyTurnToTossCoin, setTurn] = useState(true);
    const [coinPicked, setCoinPicked] = useState('');

    useEffect(() => {
        const getIsMyTurn = async () => {
            const sc = HeadsOrTailsSC.Instance;
            const game: StartGame = await sc.getGameAgainstFriend(props.friendAddress);
            setTurn(game.started)
        }
        getIsMyTurn();
        setEvents();
    },[]);

    function setEvents(){
        const sc = HeadsOrTailsSC.Instance;
        const coinTossed = sc.getCoinTossedEvent();
        const proofSent = sc.getProofSentEvent();
        coinTossed.watch(function(error: any, result: any) {
            if (!error) {
                console.log(result);
            }
        });
        proofSent.watch(function(error: any, result: any) {
            if (!error) {
                console.log(result);
            }
        });
    }

    async function send () {
        try{
            if(isMyTurnToTossCoin){
                //Send result of the coin tossed to SC
                const coinValue = utils.getCoinValue(coinPicked);
                const sc = HeadsOrTailsSC.Instance;
                await sc.sendResult(coinValue);
            }
            else{
                //Calculate random, make hash with commitment and send to SC
                const coinValue = utils.getCoinValue(coinPicked);
                const nonce = utils.generateRandom();
                const commitment = utils.makeCommitment(coinValue, nonce);
                const sc = HeadsOrTailsSC.Instance;
                if(commitment){
                    await sc.startGameAgainstFriend(props.friendAddress,commitment);
                }
            }
        }
        catch(error){
            console.log("Error");
            console.log(error);
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


