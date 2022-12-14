import {mount} from 'marketing/MarkertingApp' // mount is a simple function that give reference to the html element
import React,{useRef,useEffect}  from 'react'
import { useHistory } from 'react-router-dom'
export default()=>{
    const ref=useRef(null)
    const history=useHistory()
    useEffect(()=>{
       const {onParentNavigate}= mount(ref.current,{
            onNavigate:({pathname:nextPathname})=>{
                const {pathname} =history.location
                console.log(nextPathname)
                if(pathname!==nextPathname){
                    history.push(nextPathname)
                }
        
            },
            initialPath:history.location.pathname
        })
        history.listen(onParentNavigate)
    },[])
    return(
        <div ref={ref}></div>
    )
}