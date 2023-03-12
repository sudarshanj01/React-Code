import React from "react"

//state in an object
//Component Lifecycle

class ClassComponent extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    increment=()=>{
        // this.setState({number:this.state.number+1})
        // console.log(this.state.number)

        // The reason why the console value and the value displayed on the webpage 
        // in this StateInReact component are different is due to the fact that 
        // setState method is an asynchronous operation, 
        // and the value of this.state.number is not updated immediately after calling setState.

        this.setState(prevState => ({ number: prevState.number + 1 }), () => {
            console.log(this.state.number);
          });
     
    }
      

    decrement=()=>{
        this.setState({number:this.state.number-1})
        console.log(this.state.number)
    }

    render(){
        return(
            <div>
            <p>Number is : {this.state.number}</p>
            <button type="button" onClick={this.increment}>Add</button>
            <button type="button" onClick={this.decrement}>Sub</button>
        </div>
        )
    }


}



export default ClassComponent