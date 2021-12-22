import React, { Component } from 'react'
import App from './App'


// Step 2: Define your component
class IndexPage extends Component {
    
    
    render(){
      return (
        <main>
            <title>Pixel Bigshot</title>
          
            <div>
                <App></App>
            </div>
        </main>
      )
    }
  }
// Step 3: Export your component
export default IndexPage