import React, { useEffect, useState } from 'react'

const Learn_useEffect = () => {

    const [count,setCount]=useState(0);

  //without dependency 

    // useEffect(()=>{
    //     console.log("running")
    // })

    //empty dependency -run only once (first render)
    useEffect(()=>{
        console.log("runnnig")
    },[])
      
//    with dependency  -run first render and count update time
    // useEffect(()=>{
    //     console.log("runnings")
    // },[count])


  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Learn_useEffect
