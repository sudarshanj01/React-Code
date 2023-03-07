import React from "react"
import { useNavigate } from "react-router-dom"

function Home(){

    // const message="Hiiiiiii"

    const[message,setMessage]=React.useState('')

    const navigate=useNavigate()

    const status=true

    const handleChange=(event)=>{
        setMessage(event.target.value)
    }

    const gotoAbout=()=>{
        
        if(status){
            navigate(`/about/${message}`)
        }
      
    }

    return(
        <div>
            <h1>Home Component!!!</h1>
            <p>This is Home Component!!!</p>
            <p>Message : {message}</p>

            <input type='text' onChange={handleChange}/>
            <button type="button" onClick={gotoAbout}>Go to About</button>
        </div>
    )
}

export default Home