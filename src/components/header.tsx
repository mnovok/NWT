import React, { useState, Component } from "react";
import './header.css';
import Dropdown from "./dropdown";

interface ITestState {
    isDropdownVisible: boolean;
}


class Header extends React.Component<{}, ITestState>{
    constructor(props: {}) {
        super(props);
        this.state = {
          isDropdownVisible: false,
        };
      }
    
      handleMouseEnter = () => {
        this.setState({ isDropdownVisible: true });
      };
    
      handleMouseLeave = () => {
        this.setState({ isDropdownVisible: false });
      };

    render(){
        return(
            <div className="navBar">
                <p>Početna</p>
                <p className="menu"
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave}
                >
                    Nacionalni parkovi</p>
                    {this.state.isDropdownVisible && <Dropdown />}
                <p>Komentari</p>
            </div>
        );
    }
}

export default Header;