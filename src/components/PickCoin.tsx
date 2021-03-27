import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import { Button,Heading } from 'rimble-ui';

import ethCoin from '../assets/images/ethCoin.png';
import btcCoin from '../assets/images/btcCoin.png';

function PickCoin() {
    return(
        <div style={styles.Coins}>
            <div>
                <img src={ethCoin} style={styles.Coin} alt="ethIcon" />
                <Heading as={"h5"}>The ETH Coin is Heads</Heading>
            </div>
            <div>
                <img src={btcCoin} style={styles.Coin}  alt="btcIcon" />
                <Heading as={"h5"}>The BTC Coin is Tails</Heading>
            </div>
        </div>
    );
}

export default PickCoin;

const styles = {
    Coins: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    Coin: {
       width: 128,
       height: 128, 
    },
}