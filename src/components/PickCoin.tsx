import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import { Button,Heading } from 'rimble-ui';

import ethCoin from '../assets/images/ethCoin.png';
import btcCoin from '../assets/images/btcCoin.png';

interface Props {
    coinPicked: string;
    setCoinPicked: Function;
}

function PickCoin(props: Props) {
    return(
        <>
         {props.coinPicked === '' &&
            <div style={styles.Coins}>
                    <div>
                        <img onClick={()=> props.setCoinPicked('Heads')} src={ethCoin} style={styles.Coin} alt="ethIcon" />
                        <Heading as={"h5"}>The ETH Coin is Heads</Heading>
                    </div>
                    <div>
                        <img onClick={()=> props.setCoinPicked('Tails')} src={btcCoin} style={styles.Coin}  alt="btcIcon" />
                        <Heading as={"h5"}>The BTC Coin is Tails</Heading>
                    </div>
            </div>
          }
        {props.coinPicked === 'Heads' &&
            <div>
            <img src={ethCoin} style={styles.Coin} alt="ethIcon" />
            <Heading as={"h5"}>You have picked Heads!</Heading>
        </div>
       }
       {props.coinPicked === 'Tails' &&
            <div>
            <img src={btcCoin} style={styles.Coin}  alt="btcIcon" />
            <Heading as={"h5"}>You have picked Tails!</Heading>
        </div>
       }
       </>
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