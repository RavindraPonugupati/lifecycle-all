import React, { Component } from "react";

class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }



    render() {
        return(

            <React.Fragment>
                <h1>Hello, world!</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </React.Fragment>
        );
    }

}

export default Clock;