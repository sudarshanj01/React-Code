import { useContext } from "react"
import { MyContext } from "./ContextApi"
function TestContextTwo(){

    const {number,Setnumber}=useContext(MyContext)

    const decrementValue = () => {
        Setnumber(number - 1)
    }

    return(
        <div>
            <h2>Context Two Component!!!</h2>
            <p>Number in ContextTwo : {number} </p>
            <button type="button" onClick={decrementValue}>Subtarct</button>
        </div>
    )
}

export default TestContextTwo