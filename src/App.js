import React from 'react'
// import {mount} from 'marketing/MarkertingApp' // mount is a simple function that give reference to the html element

// console.log(mount)\
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <MarketingApp/>
      </div>
    </BrowserRouter>
   
  )
}

export default App
