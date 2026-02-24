import React, { useState } from 'react'

const Todo = () => {
  const [list,listNames]=useState(["demo1"]);
  const [name,inputNames]=useState("");

  const addNames=()=>{
    if(name.trim()!==""){
      listNames([...list,name]);
      inputNames("")
    }
   
  }

  const deletNames = (index) => {
  const del = list.filter((item, i) => i !== index);
  listNames(del);
};

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={name} onChange={(e)=>inputNames(e.target.value)} />
      <button onClick={addNames}>Add</button>

      <ul>
        {list.map((n,i)=>(<li key={i}>
          {n}
          <button onClick={()=>deletNames(i)}>dlt</button>

        </li>))}
      </ul>
    </div>
  )
}

export default Todo
