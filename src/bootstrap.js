import React from 'react'

import ReactDOM  from 'react-dom'

import App from './App'



ReactDOM.render(
    <App/>,
    document.querySelector('#root')
 )


/*our container doesn't need a malfunction whenever the container application is going

to be shown inside the browser.

We always, in all scenarios want the container to show itself immediately.

It's only our subprojects that need to export some kind of Mt. function or render themselves conditionally

depending upon whether or not we are in development.

That's the big difference between the bootstrap JS file we had put together instead of marketing and

the one inside of container.*/