//axios

import React from "react";
import axios from "axios";

function AxiosPostDemo(){

    const postObj={
        userId:'',
        title:'',
        body:''
    }

    const[data,setData]=React.useState(postObj)

    const[display,setDisplay]=React.useState()

    const handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const submitData=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then(response=>response.data)
        .then(res=>{
            console.log(res)
            setDisplay(res)
        })
    }

    return(
        <div>
            <form>
                <label>UserID : </label>
                <input type='text' name='userId' onChange={handleChange}/>

                <label>Title : </label>
                <input type='text' name='title' onChange={handleChange}/>

                <label>Body : </label>
                <input type='text' name='body' onChange={handleChange}/>

                <button type="button" onClick={submitData}>Submit</button>
            </form>

            {display ? (<div>
                <h2>New User Added: </h2>
                <p>User Id: {display.userId}</p>
                <p>Title: {display.title}</p>
                <p>Body: {display.body}</p>
            </div>):""}
            
        </div>
    )
}

export default AxiosPostDemo