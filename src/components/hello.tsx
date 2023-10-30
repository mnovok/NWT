import React, { Component } from "react";

export interface HelloProps {

}

export interface HelloState {
    name: string;
}

class Hello extends Component<HelloProps, HelloState>{
    constructor(props: HelloProps) {
        super(props);
        console.log("Konstruktor");
        this.state = { name : 'Jure' };
        console.log(this.state.name);
    }

    componentDidMount() {
        this.setState({ name: 'Mate' });
        console.log("Did Mount");
        console.log(this.state.name);
      }

    render(){
        return(
            <div>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Hello;