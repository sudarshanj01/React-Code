import React ,{useContext}from 'react'
import { MyContext } from './ContextApi'

export default function TestContextOne() {

    const {number,Setnumber}=useContext(MyContext)

    const incrementValue=()=>{
        Setnumber(number+1)
    }
    

  return (
    <div>
        <h2>Context One Component!!!</h2>
        <p>Number in ContextOne : {number} </p>
        <button type="button" onClick={incrementValue}>Add</button>
    </div>
  )
}
