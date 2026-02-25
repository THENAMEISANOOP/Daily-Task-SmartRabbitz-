import React, { useEffect, useState } from 'react'
import "../styles//Timer.css"
const TimerApp = () => {
    const [time,isTime]=useState(0);
    const[run,isRun]=useState(false);

  useEffect(()=>{
    let timer;
    if(run){
   timer=setInterval(() => {
        isTime((n)=>n+1)
    }, 1000);
    }
    
    return ()=> clearInterval(timer)
  },[run])

  return (
    <div className='main'>
        <div className='submain'>
          <h2>Timer:{time}</h2>
        <button className='start' onClick={()=>isRun(true)}>run</button>
        <button className='reset' onClick={()=>{isRun(false);isTime(0)}}>reset</button>
        <button className='stop' onClick={()=>isRun(false)}>stop</button>
        </div>
      
    </div>
  )
}

export default TimerApp
