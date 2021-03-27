import { useCallback, useEffect, useState } from "react";

import ethCoin from '../assets/images/ethCoin.png';
import btcCoin from '../assets/images/btcCoin.png';

function PickCoin() {
    return(
        <div>
            <img src={ethCoin} style={styles.Coin} alt="ethIcon" />
            <img src={btcCoin} style={styles.Coin}  alt="btcIcon" />
        </div>
    );
}

export default PickCoin;

const styles = {
    Coin: {
       width: 32,
       height: 32, 
    },
}