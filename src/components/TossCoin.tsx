import { useCallback, useEffect, useState } from "react";

import ethCoin from '../assets/images/ethCoin.png';
import btcCoin from '../assets/images/btcCoin.png';
import animationToss from '../assets/images/tossCoin.gif';

interface Props {
    coinPicked: string;
    setCoinPicked: Function;
} 
function TossCoin(props: Props) {
    const [isTheCoinTossed, setCoinTossed] = useState(false);

    async function play () {
        const {coinPicked} = props;
        if(coinPicked === ''){
            const randomNumber = await tossCoin();
            tailsOrHeads(randomNumber);
        }
    }

    async function tossCoin(): Promise<number> {
        setCoinTossed(true);
        let flipResult = Math.random();
        await animationTimeout(3500);
        setCoinTossed(false);
        return flipResult;
    }

    function tailsOrHeads(flipResult: number): string {
        const {setCoinPicked} = props;
        if(flipResult < 0.5){
            setCoinPicked('Heads');
            return 'Heads';
        }
        setCoinPicked('Tails');
        return 'Tails'
    }

    function animationTimeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div onClick={()=> play()}>
            {!isTheCoinTossed &&
                <img src={props.coinPicked === 'Tails' ? btcCoin : ethCoin} style={styles.Coin} alt="logo" />
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
       width: 196,
       height: 196, 
       marginBottom: 20,
    },
    animationToss: {
        marginTop: 10 
     },
}