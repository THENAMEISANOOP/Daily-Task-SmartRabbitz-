import React, { Children, useCallback, useState } from 'react'
import Child from './child';



const Learn_usecallback = () => {

    const [num,isNum]=useState(0);

    const increase=useCallback(()=>{
              isNum((n)=>n+1)
    },[])

    const decrease=useCallback(()=>{
              isNum((n)=>n-1)
    },[])
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increase}>+</button>
        <Child minus={decrease}/>
        
    </div>
  )
}

export default Learn_usecallback
