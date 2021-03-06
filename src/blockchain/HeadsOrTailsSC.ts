import Web3 from 'web3';
import { SC_ABI, SC_ADDRESS } from '../config/headsOrTailsSCData';
import {StartGame} from '../models/dtos';


export default class HeadsOrTailsSC {
    private web3: Web3;
    private headsOrTailsContract: any;
  
    private static instance: HeadsOrTailsSC;
  
    private constructor() {
      this.web3 = new Web3(Web3.givenProvider);
      this.headsOrTailsContract = new this.web3.eth.Contract(SC_ABI, SC_ADDRESS);
    }

    public static get Instance(): HeadsOrTailsSC {
        const instance = this.instance || (this.instance = new this());
        return instance;
    }

    
    public async startGameAgainstFriend(friendAddress: any, commitment: string){
        const myAccount = await this.getMyAcccount();
        await this.headsOrTailsContract.methods.startGameAgainstFriend(friendAddress, commitment).send({from: myAccount});
    }

    public async getGameAgainstFriend(friendAddress: any): Promise<StartGame> {
        try{
            const myAccount = await this.getMyAcccount();
            const commitment = await this.headsOrTailsContract.methods.getGameAgainstFriend(friendAddress).send({from: myAccount});
            return {started: true, commitment};
        }
        catch(error){
            console.log(error);
            return {started: false, commitment: ''};
        } 
    }

    public async sendResult(result: number) {
        try{
            const myAccount = await this.getMyAcccount();
            await this.headsOrTailsContract.methods.sendResult(result).send({from: myAccount});
        }
        catch(error){
            console.log(error);
        } 
    }

    public async sendProof(friendAddress: any, nonce: string, coinValue: number) {
        try{
            const myAccount = await this.getMyAcccount();
            await this.headsOrTailsContract.methods.sendProof(friendAddress, nonce, coinValue).send({from: myAccount});
        }
        catch(error){
            console.log(error);
        } 
    }

    public async deleteGame() {
        try{
            const myAccount = await this.getMyAcccount();
            await this.headsOrTailsContract.methods.deleteGameAgainstFriend().send({from: myAccount});
        }
        catch(error){
            console.log(error);
        } 
    }

    public async getFriendsGames(){
        const acccounts = await this.web3.eth.getAccounts();
        const myGames = await this.headsOrTailsContract.methods.friendGames(acccounts[0]).call();
        return myGames;
    }

    public getCoinTossedEvent(callback: Function){
        return this.headsOrTailsContract.events.CoinTossed(callback);
    }
    public getProofSentEvent(callback: Function){
        return this.headsOrTailsContract.events.ProofSent(callback);
    }

    private async getMyAcccount(): Promise<string> {
        const acccounts = await this.web3.eth.getAccounts();
        return acccounts[0];
    }
}