import React, { Component } from "react";

class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {name: "ravi"};
        console.log("constructor is called");
    }
    componentWillMount() {
        console.log("componentWillMount is called");
    }
    componentDidMount() {
        console.log("componentDidMount is called");
    }
    componentWillReceiveProps() {
        console.log("componentWillReceivedprops is called");
    }
    shouldComponentUpdate() {
       return true;
    }



    componentWillUpdate() {
        console.log("componentWillUpdate is called");
    }
    componentDidUpdate(){
        console.log("componentDidupdate is called");
    }

    render() {
        return (
            <React.Fragment>
                {this.state.name}
                <input type="text" value= {this.state.name} onChange={(e) =>{this.setState({name:e.target.value})}} />
            </React.Fragment>
        );

    }
}

export default LifeCycle;
