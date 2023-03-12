import React,{ useEffect } from "react"
//use effect

function UseEffect(){

    //case 1
    // useEffect(() => {
    //     console.log('hiiiiii')
    // })

    //case 2  --> exactly similar to componentDidMount
    // useEffect(() => {
    //     console.log('hiiiiii')
    // },[])

    const[number,setNumber]=React.useState(0) 

    //case 3  --> componentDidMount and didUpdate
    useEffect(() => {
        console.log('hiiiiii')
    },[number])

    const changeValue=()=>{
        setNumber(number+1)
    }

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <p>Number is : {number}</p>
            <button type="button" onClick={changeValue}>Change</button>

        </div>
    )
}

export default UseEffect