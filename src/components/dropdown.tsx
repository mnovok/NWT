import React from "react";
import './dropdown.css';

class Dropdown extends React.Component<{}, {}>{

    render(){
        return(
            <div className="dropdown">
                <p>NP Brijuni</p>
                <p>NP Krka</p>
                <p>NP Paklenica</p>
            </div>
        );
    }
}

export default Dropdown;