import React, { useState } from 'react'

const Todoinput = (props) => {
    const[inputText,setInputText]=useState('')
  return (
    <>
    <div className="d-flex">
        <input type="text" onChange={e=>{
            setInputText(e.target.value)
        }} palceholder="Type here"  
        value={inputText}/>
        <button onClick={()=>{ props.additem(inputText)
        setInputText('')}}>+</button>
    </div>


    </>
  )
}

export default Todoinput