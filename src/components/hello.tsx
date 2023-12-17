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

/*
import React, { useState, useEffect } from "react";

export interface HelloProps {}

const Hello: React.FC<HelloProps> = () => {
  const [name, setName] = useState<string>('Jure');

  useEffect(() => {
    setName('Mate');
    console.log("Did Mount");
    console.log(name);
  }, []);

  console.log("Konstruktor");
  console.log(name);

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Hello;
*/