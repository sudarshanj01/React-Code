import React from "react";

export default class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log('Component One Unmounted!!!')
    }

    render(){

        return(
            <div>
                <h2>Component One </h2>
                <p>This is Component One!!!</p>
            </div>
        )
    }

}

