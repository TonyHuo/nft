import React, { Component } from 'react'
import App from './App'
import { Helmet } from "react-helmet"
import about from "../images/about.png"
// Step 2: Define your component
class IndexPage extends Component {
    
    
    render(){
      return (
        <main>
            <div className="application">
                <Helmet>
                <meta charSet="utf-8" />
                <title>Pixel Bigshot</title>
                <meta property="og:title" content="Pixel Bigshot" />
                <meta property="og:type" content="100 Pixel Bigshot (PBS) in the world." />
                <meta property="og:url" content="https://pixelbigshot.com" />
                <meta property="og:image" content={about} />
                <meta property="og:description" content="100 Pixel Bigshot (PBS) in the world."/>
                <meta property="og:site_name" content="Pixel Bigshot"/>   
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@pixelbigshot"/>
                <meta name="twitter:creator" content="@pixelbigshot"/>
                </Helmet>
            </div>
            <div>
                <App></App>
            </div>
        </main>
      )
    }
  }
// Step 3: Export your component
export default IndexPage