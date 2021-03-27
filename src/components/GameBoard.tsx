import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import { Button,Heading } from 'rimble-ui';
import TossCoin from './TossCoin';
import PickCoin from './PickCoin';

function GameBoard() {
    const [isMyTurn, setTurn] = useState(true);

    async function send () {
        console.log("");
    }

    return(
        <div>
            {!isMyTurn &&
              <>
                <Heading as={"h4"}>Is your turn to toss the coin, your adversary has already chosen.</Heading>
                <TossCoin />
              </>
            }
            {isMyTurn &&
              <>
                <Heading as={"h4"}>Pick your election, your adversary will toss the coin.</Heading>
                <PickCoin />
              </>
            }
        </div>
    );
}

export default GameBoard;


const styles = {
    Coin: {
       width: 32,
       height: 32, 
    },
    animationToss: {
        marginTop: 10 
     },
}