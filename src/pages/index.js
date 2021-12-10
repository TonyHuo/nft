import { withArtDirection } from "gatsby-plugin-image"
import * as React from "react"
import logo from "../images/pixelbitshot.png"
import  "../styles/global.css"
// styles
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
    color:"#ffffff",
    
}
const headingStyles = {

  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
  
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}


// markup
const IndexPage = () => {
  return (
  
    <main style={pageStyles}>
      <title>Pixel Bigshot</title>
      <h1 style={headingStyles}> 
        <img src={logo} alt="title" width="100%" height="100%"></img>
        <span role="img" aria-label="Party popper emojis">
        </span>
      </h1>
      <div style={contentStyles}><img src={"https://via.placeholder.com/100"} alt="title" width="100" height="100"></img></div>
      <div style={contentStyles}>About this project</div>
      <div style={contentStyles}> 
        Mint: <input type="number" id="fname" name="fname"></input>
      </div>
      <div style={contentStyles}> 
        <button>Confirm</button>
      </div>


    </main>
  )
}

export default IndexPage
