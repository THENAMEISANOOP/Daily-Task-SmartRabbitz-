import React, { useState } from 'react'

const Counter = () => {
    const[num,isNum]=useState(0);


  return (
    <div>
    <h2>Counter</h2>
    <h3>{num}</h3>
    <button onClick={()=>isNum(num-1)}>-</button>
    <button onClick={()=>isNum(0)}>reset</button>
    <button onClick={()=>isNum(num+1)}>+</button>
      
    </div>
  )
}

export default Counter
