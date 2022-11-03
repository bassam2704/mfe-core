import React from 'react'
// import {mount} from 'marketing/MarkertingApp' // mount is a simple function that give reference to the html element

// console.log(mount)\
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

const generateClassname=createGenerateClassName({
  productionPrefix:'core'
})
function App() {
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <div>
          <Header/>
          <MarketingApp/>
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
