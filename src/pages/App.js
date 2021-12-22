import React, { Component } from 'react'
import { ethers } from 'ethers';

// Step 2: Define your component
class App extends Component {
    constructor(props){
      super(props)
        
      // Set initial state
      this.state = {msg : 'Hi, There!',value:false}
        
      // Binding this keyword
      this.mintClick = this.mintClick.bind(this)
      this.awardClick = this.awardClick.bind(this)
      this.connectWallet = this.connectWallet.bind(this)
    }
    async connectWallet() {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install Metamask!");
      }

      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Found an account! Address: ", accounts[0]);
        //setCurrentAccount(accounts[0]);
      } catch (err) {
        console.log(err)
      }
    }

    mintClick(){
      // Changing state
      this.setState({msg : 'mint'})

    };
    awardClick(){
        this.setState({msg : 'award'})
    }
      
    render(){
      return (
        <div>
          <h2>Message :</h2>
            
          <p>{this.state.msg}</p>
    
          <button  onClick={this.mintClick} disabled={!this.state.value}>
            mint
          </button>
          <button onClick={this.connectWallet}>
            award
          </button>
        </div>
      )
    }
  }

export default App