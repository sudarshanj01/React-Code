import React from "react";

export default class ComponentTwo extends React.Component{

    componentWillUnmount(){
        console.log('Component Two Unmounted!!!')
    }

    render(){

        return(
            <div>
                <h2>Component Two </h2>
                <p>This is Component Two!!!</p>
            </div>
        )
    }

}

