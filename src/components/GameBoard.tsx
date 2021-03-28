import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import { Button,Heading, Input } from 'rimble-ui';
import Web3 from 'web3';
import TossCoin from './TossCoin';
import PickCoin from './PickCoin';
import HeadsOrTailsSC from "../blockchain/headsOrTailsSC";

interface Props {
    isPlayingAgainstFriend: boolean;
    friendAddress?: string;
}
function GameBoard(props: Props) {
    const [isMyTurn, setTurn] = useState(true);
    const [friendAddress, setFriendAddress] = useState('');
    const [coinPicked, setCoinPicked] = useState('');
    useEffect(() => {
        //get from SC if is my turn or not
        const getIsMyTurn = async () => {
            const sc = HeadsOrTailsSC.Instance;
            const commitment = await sc.getGameAgainstFriend(friendAddress);
        }
        getIsMyTurn();
        let randomTurn = Math.random();
        setTurn(randomTurn < 0.5)
    },[]);

    useEffect(() => {
        const getAccountsFromBlockchain = async () => {
            const web3 = new Web3(Web3.givenProvider)
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
        }
        getAccountsFromBlockchain()
    });

    async function send () {
        console.log("send result");
        //Send result to SC
    }

    function isReadyToSendTheElection(): boolean {
        if(props.isPlayingAgainstFriend){
            if(coinPicked !== '' && friendAddress !== '') return true;
            return false;
        }
        else{
            if(coinPicked !== '') return true;
            return false;
        }
    }

    function handleChangeAddress(e: any) {
        setFriendAddress(e.target.value);
    }

    return(
        <div>
            {!isMyTurn &&
              <>
                <Heading as={"h4"}>You have to toss the coin, your adversary has already chosen.</Heading>
                <Heading as={"h6"}>{coinPicked === '' ? 
                    "Click into the ETH coin to toss it." :
                    'The result has been: ' + coinPicked}
                </Heading>
                <TossCoin coinPicked={coinPicked} setCoinPicked={setCoinPicked}/>
              </>
            }
            {isMyTurn &&
              <>
                <Heading as={"h4"}>Pick your election, your adversary will toss the coin.</Heading>
                <Heading as={"h6"}>Click into the coin you want to pick.</Heading>
                <PickCoin coinPicked={coinPicked} setCoinPicked={setCoinPicked}/>
              </>
            }
            {props.isPlayingAgainstFriend &&
            <div>
                    <Input
                        type="text"
                        required={true}
                        placeholder="e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
                        onChange={(handleChangeAddress)}
                    />
                    <Heading as={"h6"}>Paste your friend address here.</Heading>
            </div>
            }
            <Button icon="Send" mr={3} disabled={!isReadyToSendTheElection()}>
                Send
            </Button>
        </div>
    );
}

export default GameBoard;


