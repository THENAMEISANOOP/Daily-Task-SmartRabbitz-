import React, { useState } from 'react'

const Todo = () => {
  const [list,listNames]=useState(["demo1"]);
  const [name,inputNames]=useState("");
  const [edit,editName]=useState(null);


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

const Edit=(index)=>{
    inputNames(list[index]);
    editName(index);
}

const updateName = () => {
  if (name.trim() !== "") {
    const updated = [...list];
    updated[edit] = name;
    listNames(updated);
    editName(null);
    inputNames("");
  }
};

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={name} onChange={(e)=>inputNames(e.target.value)} />
      <button onClick={addNames}>Add</button>
      <button onClick={updateName}>Update</button>

      <ul>
        {list.map((n,i)=>(<li key={i}>
          {n}
          <button onClick={()=>deletNames(i)}>dlt</button>
          <button onClick={()=>Edit(i)}>Edit</button>

        </li>))}
      </ul>
    </div>
  )
}

export default Todo
