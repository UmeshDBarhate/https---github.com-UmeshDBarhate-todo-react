import React from 'react'
import Todoinput from './Todoinput';
import { useState } from 'react';
import Todolist from './Todolist';

const Todo = () => {
    const[item,setItem]=useState([])
  let additem=(inputText)=>{
    if (inputText !==""){
        setItem([...item,inputText]);
    }
    
  }
  const deleteitem=(id)=>{
    const itemcopy =[...item]
    itemcopy.splice(id,1)
    setItem([...itemcopy])
  }

  
  console.log(item)
  return (
    <div>
        <div className="container">
      <Todoinput additem={additem}/>
    </div>
    <div className="container">
      {item.map((item,i)=>{return( <Todolist key={i} id={i} item={item} deleteitem={deleteitem} />)
      })}
    </div>
    </div>
  )
}

export default Todo