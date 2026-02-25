import React, { useEffect, useState } from 'react'

const Learn_useEffect = () => {

    // const [count,setCount]=useState(0);
    const[user,isUser]=useState([]);

    

    //fetching users
      
     useEffect(() => {
    async function getUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      const addlimlt= data.slice(0,3);
      isUser(addlimlt)

    //   isUser(data);
    }

    getUser();
  }, []);

  //without dependency 

    // useEffect(()=>{
    //     console.log("running")
    // })

    //empty dependency -run only once (first render)
    // useEffect(()=>{
    //     console.log("runnnig")
    // },[])
      
//    with dependency  -run first render and count update time
    // useEffect(()=>{
    //     console.log("runnings")
    // },[count])


  return (
    <div>
        <ul>
            {user.map(u=>(<li key={u.id}>{u.name}</li>))}
            
        </ul>
        {/* <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button> */}
    </div>
  )
}

export default Learn_useEffect
