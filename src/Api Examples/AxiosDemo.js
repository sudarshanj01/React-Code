//axios
import axios from "axios";
import React,{ useEffect } from "react";

function AxiosDemo(){

    const[userList,setUserList]=React.useState([])

    //get request
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.data)
        .then(res=>{
            setUserList(res)
        })
    },[])

    return(
        <div>
            <h1>Axios Demo!!!</h1>
            <ul>
                {
                    userList.map((user)=>(
                        <li>{user.username}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AxiosDemo