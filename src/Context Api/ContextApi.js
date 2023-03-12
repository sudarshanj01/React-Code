import React, { createContext, useState } from 'react'
import TestContextOne from './TestContextOne'
import TestContextTwo from './TestContextTwo'

export const MyContext=createContext()

export default function ContextApi() {
    
     const [number, Setnumber] = useState(0)

    const incrementNumber=()=>{
        Setnumber(number+1)
    }


  return (
    <MyContext.Provider value={{number,Setnumber}}>
     
    <div>
        <h1>Context API Demo!!</h1>
        <p>Number in Parent : {number}</p>
        <button type="button" onClick={incrementNumber}>Add</button>
        <TestContextOne/>
        <TestContextTwo/>
    </div>
      
    </MyContext.Provider>

 
  )
}
