import React, { Component } from "react";

function activateLasers(){
    
    console.log("dsdsdd");
}
class HandlingEvents1 extends React.Component {

    render() {
        return(

            <div>
                <button onClick={activateLasers}>Click me</button>
            </div>
        );
    }
}

export default HandlingEvents1;