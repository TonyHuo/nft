import React, { Component } from 'react'
import App from './App'
import { Helmet } from "react-helmet"

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
                <meta property="og:image" content="https://www.pixelbigshot.xyz/static/pixel-7424a8e7cd2c5ac3b632d192517fe7a5.gif" />
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