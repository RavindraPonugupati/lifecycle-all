import React, { Component } from "react";

class ClassBaseComponent extends Component {
    constructor(props){
        super(props);
        this.state = {name: "ravi", age: "26",address: "60 feet road", pincode: "523002"}
        this.state = {name: "1", age: "25",address: "30 feet road", pincode: "523001"}
    }


    render(){
        return(

            <React.Fragment>
                <table>
                    {/* <thead>
                        <tr>
                            <th><h1>{this.state.name}</h1></th>
                            <th><h1>{this.state.age}</h1></th>
                            <th><h1>{this.state.address}</h1></th>
                            <th><h1>{this.state.pincode}</h1></th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>{this.state.name}</td>
                            <td>{this.state.age}</td>
                            <td>{this.state.address}</td>
                            <td>{this.state.pincode}</td>
                        </tr>
                        <tr>
                            <td>{this.state.name}</td>
                            <td>{this.state.age}</td>
                            <td>{this.state.address}</td>
                            <td>{this.state.pincode}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>

        );
    }
}

export default ClassBaseComponent;