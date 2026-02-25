import React, { useMemo, useState } from 'react'

const Learn_usememo = () => {
    const[num,isNum]=useState(0);
    const [togle,istogle]=useState(false);

    // const double=multiple(num);  without usememo


    //with usememo.
    const double=useMemo(()=>{     
              return multiple(num)
    },[num])    


    const add=()=>{
        isNum(num+1)
    }
    const handletoggle=()=>{
        istogle((t)=>!t)
        console.log("toggle")
    }
  return (
    <div>
        <p>Num = {num}</p>
        <p>double = {double}</p>
      <button onClick={add}>Add</button>
      <p>{togle ? "ON" :"OFF"}</p>
      <button onClick={handletoggle}>click</button>
    </div>
  )
}

export default Learn_usememo

function multiple(num){
    for(let i=0;i<1000000000;i++){}
    console.log("multpliee");
    return num+1
}
