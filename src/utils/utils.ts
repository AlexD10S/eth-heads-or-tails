import Web3 from 'web3';
enum CoinValue {
    'Heads' = 1,
    'Tails' = 2
}

function getCoinValue(coin: string): number {
    if(coin === 'Heads') return CoinValue.Heads;
    return CoinValue.Tails
}

//Function to generate a random gui in the browser
//Found in: https://stackoverflow.com/a/2117523
function generateRandom() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function makeCommitment(value: number, nonce: string) {
    const web3 = new Web3();
    const hash = web3.utils.soliditySha3({t: 'string', v: nonce}, {t: 'int8', v:value});
    return hash;

}

function verifyCommitment(commitment: string, value: number, nonce: string): boolean {
    const web3 = new Web3();
    const hash = web3.utils.soliditySha3({t: 'string', v: nonce}, {t: 'int8', v:value});
    return (hash === commitment);

}
export {getCoinValue, generateRandom, makeCommitment, verifyCommitment}