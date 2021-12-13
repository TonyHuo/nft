import { withArtDirection } from "gatsby-plugin-image"
import * as React from "react"
import  "../styles/global.css"
import gif from "../images/pixel.gif"
import * as styles from "./index.module.css"

console.log(styles)

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


function mint(){
 
  alert("add web3 mint")
}
  

// markup
const IndexPage = () => {
  return (
  
    <main>
      <title>Pixel Bigshot</title>
      <h2 style={headingStyles}> 
        Pixel Bigshot
      </h2>
      <div className={styles.textCenter} style={contentStyles}><img src={gif} alt="title" width="200" height="200"></img></div>
      <div className={styles.fontPixel} style={contentStyles}>
        100 big names celebrities in the world. Can you recognize them? 
        
        <p className={styles.specialEdit}>
        * Special edition: We have 5% of NFTs with a zombie-colour skin. If you mint that, let us know and you will be granted a chance to mint another one for free. 
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
