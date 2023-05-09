import React from 'react'
import Edited from './Edited'
import { Link } from 'react-router-dom'

const Todolist = (props) => {
  return (
    <>
    <div className="container">
      <li>{props.item} <button onClick={(e)=>{props.deleteitem(props.id)}}>delete</button>
      <Link to='/edit'><button >edit</button></Link><span hidden><Edited id={props.id}/></span></li>
      
    </div>
    </>
  )
}

export default Todolist