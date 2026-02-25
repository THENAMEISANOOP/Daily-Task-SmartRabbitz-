import React, { useRef, useState } from 'react'

//update data without re-render 

const Learn_useRef = () => {
    const my_ref=useRef(0)
    const[num,isNum]=useState(0);

    const increase=()=>{
        my_ref.current+=1;
        console.log("my ref =",my_ref.current)

    }
  return (
    <div>
        <h2>my ref:{my_ref.current}</h2>
        <button onClick={increase}>+</button>
        <button onClick={()=>isNum(num+1)}>try to re-render</button>  
      
    </div>
  )
}

export default Learn_useRef
