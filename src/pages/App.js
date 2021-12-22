import React, { Component } from 'react'
import { BigNumber, ethers } from 'ethers';
import contract from './NFTCollectible.json';
import gif from "../images/pixel.gif"
import twitter from "../images/twitter.png"
import  "../styles/global.css"
import * as styles from "./index.module.css"
import toast, { Toaster } from 'react-hot-toast';

const contentStyles = {
  margin: "auto",
  width: "50%",
  border: "3px solid green",
  padding: 10,
  marginBottom:5, 
  color:"#ffffff",
}
const headingStyles = {

  marginTop: 20,
  marginLeft:20,
  marginBottom: 64,
  maxWidth: 520,
  color:"#ffffff"
}
const notify = () => toast('insufficient funds');
const contractAddress = contract.address
const abi = contract.abi

class App extends Component {
    constructor(props){
      super(props)
  
      // Set initial state
      this.state = {claimNum:0,mintNum:0,value:false,account:'Connect',balance:1,status:'',address:''}
        
      this.connectWallet = this.connectWallet.bind(this)
      this.mintNFT = this.mintNFT.bind(this)
      this.checkAwards = this.checkAwards.bind(this)
      this.mintExtra = this.mintExtra.bind(this)
      this.updateInput = this.updateInput.bind(this)
    
    }
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }

    componentDidMount() {
   
      this.connectWallet()

    }
   
    async connectWallet() {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install Metamask!");
      }

      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      
        console.log("Found an account! Address: ", accounts[0]);
        this.setState({account : accounts[0]})
        this.checkAwards();
        
      } catch (err) {
        console.log(err)
      }
    }

     async mintNFT() {
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi,signer)
         
          let total= (this.state.mintNum*50).toFixed(1)
          
          let ntfTxn = await nftContract.mint(this.state.mintNum,{value: ethers.utils.parseEther(total)})
          await ntfTxn.wait()
          
          await nftContract.checkWinningTimes().then(function(result){
          
            this.setState({claimNum:parseInt(result, 16)})
        
          }.bind(this))

          console.log("mint success")
  
        } else {
          console.log("Ethereum object does not exist")
        }
  
      } catch (err) {
       
        if(typeof err === 'object'){
         
          if(err.hasOwnProperty('data')){
            
            if(err.data.hasOwnProperty('message')){
             
              if(err.data.message.indexOf('insufficient')>-1){

                notify()
              }
                
            }
          }
        }
       
      }
    }
    async mintExtra() {
      try {
        const { ethereum } = window;
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum)
          const signer = provider.getSigner()
          const nftContract = new ethers.Contract(contractAddress, abi, signer)
        
          let ntfTxn = await nftContract.extraMint()
          await ntfTxn.wait()
          await nftContract.checkWinningTimes().then(function(result){
          
            this.setState({claimNum:parseInt(result, 16)})
         
         }.bind(this))
  
        } else {
          console.log("Ethereum object does not exist");
        }
  
      } catch (err) {
        
        
        if(typeof err === 'object'){
         
          if(err.hasOwnProperty('data')){
            
            if(err.data.hasOwnProperty('message')){
             
              if(err.data.message.indexOf('insufficient')>-1){

                notify()
              }
                
            }
          }
        }
      }
    }
    async checkAwards() {
      try {

        const { ethereum } = window;
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum)
          const signer = provider.getSigner()
          const nftContract = new ethers.Contract(contractAddress, abi, signer)
        

          let nftTxn =await nftContract.checkWinningTimes().then(function(result){
          
             this.setState({claimNum:parseInt(result, 16)})
          
          }.bind(this))
          
        } else {
          console.log("Ethereum object does not exist");
        }
  
      } catch (err) {
        
        console.log(err);
       
      }
    }
    updateInput(event){
    
      const num = event.target.value;
      this.setState({mintNum:num})
    }


    render(){
      return (
        <main>
            <h2 className={styles.parent}> 
              <div className={styles.column}>Pixel Bigshot</div>
              <div className={styles.column}><button className={styles.claimButton} onClick={this.mintExtra}>Claim:{this.state.claimNum}</button></div>
              
            </h2>
            <a href="https://twitter.com/pixelbigshot" target="_blank"><img src={twitter} className={styles.twitter} alt="title" width="32" height="32"></img></a>
            <div className={styles.addr}>
              <p className={styles.addrOver}>
                {this.state.account}
              </p>
            </div>
           
            <Toaster />
            
            <div className={styles.textCenter} style={contentStyles}><img src={gif} alt="title" width="200" height="200"></img></div>

            <div className={styles.fontPixel} style={contentStyles}>
                100 Pixel Bigshot (PBS) in the world. Can you recognize them? 
              <p className={styles.specialEdit}>
                * Special edition: We have 5% of NFTs with a zombie-colour skin. If you mint that, let us know and you will be granted a chance to mint another one for free. 
              </p>
               1 PBS cost 50 Matic
            </div>
            <div style={contentStyles}> 
              Amount: <input type="number" onChange={this.updateInput}></input> 
            </div>
            <div className={styles.textCenter} style={contentStyles}> 
              <button className={styles.mintButton} onClick={this.mintNFT} disabled={!this.state.mintNum>0}>Mint</button>
            </div>
        </main>
      )
    }
  }

export default App