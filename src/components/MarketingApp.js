import {mount} from 'marketing/MarkertingApp' // mount is a simple function that give reference to the html element
import React,{useRef,useEffect}  from 'react'

export default()=>{
    const ref=useRef(null)
    useEffect(()=>{
        mount(ref.current)
    })
    return(
        <div ref={ref}></div>
    )
}