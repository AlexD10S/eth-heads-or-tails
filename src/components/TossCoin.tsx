import { useCallback, useEffect, useState } from "react";

import ethCoin from '../assets/images/ethCoin.png';
import btcCoin from '../assets/images/btcCoin.png';
import animationToss from '../assets/images/tossCoin.gif';

function TossCoin() {
    const [isHead, setHeadOrTails] = useState(true);
    const [isTheCoinTossed, setCoinTossed] = useState(false);

    async function play () {
        const randomNumber = await tossCoin();
        const flipResult = tailsOrHeads(randomNumber);
        console.log(flipResult);
    }

    async function tossCoin(): Promise<number> {
        setCoinTossed(true);
        let flipResult = Math.random();
        await animationTimeout(3500);
        setHeadOrTails(flipResult < 0.5);
        setCoinTossed(false);
        return flipResult;
    }

    function tailsOrHeads(flipResult: number): string {
        if(flipResult < 0.5) return 'Heads';
        return 'Tails'
    }

    function animationTimeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div onClick={()=> play()}>
            {!isTheCoinTossed &&
                <img src={isHead ? ethCoin : btcCoin} style={styles.Coin} alt="logo" />
            }
            {isTheCoinTossed &&
                <img src={animationToss} style={styles.animationToss} alt="logo" />
            }
        </div>
    );
}

export default TossCoin;


const styles = {
    Coin: {
       width: 256,
       height: 256, 
    },
    animationToss: {
        marginTop: 10 
     },
}