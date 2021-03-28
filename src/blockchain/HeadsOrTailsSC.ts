import Web3 from 'web3';
import { SC_ABI, SC_ADDRESS } from '../config/headsOrTailsSCData';
import {StartGame} from '../models/dtos';


export default class HeadsOrTailsSC {
    private web3: Web3;
    private headsOrTailsContract: any;
  
    private static instance: HeadsOrTailsSC;
  
    private constructor() {
      this.web3 = new Web3(Web3.givenProvider);
      this.headsOrTailsContract = new this.web3.eth.Contract(SC_ABI, SC_ADDRESS)
    }

    public static get Instance(): HeadsOrTailsSC {
        const instance = this.instance || (this.instance = new this());
        return instance;
    }

    
    public async startGameAgainstFriend(friendAddress: string, commitment: string){
        await this.headsOrTailsContract.methods.startGameAgainstFriend(friendAddress, commitment).call();
    }

    public async getGameAgainstFriend(friendAddress: string): Promise<StartGame> {
        try{
            const commitment = await this.headsOrTailsContract.methods.getGameAgainstFriend(friendAddress).call();
            return {started: true, commitment};
        }
        catch(error){
            return {started: false, commitment: ''};
        } 
    }
}