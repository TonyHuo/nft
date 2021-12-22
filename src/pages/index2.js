import { withArtDirection } from "gatsby-plugin-image"
import * as React from "react"

import  "../styles/global.css"
import gif from "../images/pixel.gif"
import * as styles from "./index.module.css"
import { NFT_BIGSHOT_ADDRESS, NFT_BIGSHOT_ABI } from "./config.js"

import { ethers } from 'ethers';

console.log(styles)
console.log(NFT_BIGSHOT_ADDRESS)
const pageStyles = {
  
  background: "#000000",
  padding: 26,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
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
var state = {"test":"123"};


const connectWalletHandler = async () => {
  const { ethereum } = window;

  if (!ethereum) {
    alert("Please install Metamask!");
  }

  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Found an account! Address: ", accounts[0]);
  
   // contract = new web3.eth.Contract(NFT_BIGSHOT_ABI, NFT_BIGSHOT_ADDRESS);

 

  } catch (err) {
    console.log(err)
  }
}

function mint(){
  console.log("test");
  state.test = "456"
  console.log(state)
  //account = "456";
  //this.state.account = "ccdd";
  //connectWalletHandler();

}
  

// markup
const IndexPage = () => {
  return (
  
    <main>
      <title>Pixel Bigshot</title>
      <h2 style={headingStyles}> 
        Pixel Bigshot
      </h2>
      
      
      <div className={styles.fontPixel} style={contentStyles}>
        100 big names celebrities in the world. Can you recognize them? 
        
        <p className={styles.specialEdit}>
        * Special edition: We have 5% of NFTs with a zombie-colour skin. If you mint that, let us know and you will be granted a chance to mint another one for free. 
        </p>
        <p>
          {state.test}
        </p>
        
      </div>
      
      <div style={contentStyles}> 
        Mint: <input type="number" id="fname" name="fname"></input>
      </div>
      <div className={styles.textCenter} style={contentStyles}> 
        <button className={styles.mintButton} onClick={mint}>Confirm</button>
      </div>

    </main>
  )
}

export default IndexPage
