// import React, { useState, Component } from "react";
// import './header.css';
// import Dropdown from "../dropdown";

// interface ITestState {
//     isDropdownVisible: boolean;
// }


// class Header extends React.Component<{}, ITestState>{
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//           isDropdownVisible: false,
//         };
//       }
    
//       handleMouseEnter = () => {
//         this.setState({ isDropdownVisible: true });
//       };
    
//       handleMouseLeave = () => {
//         this.setState({ isDropdownVisible: false });
//       };

//     render(){
//         return(
//             <div className="navBar">
//                 <p>Početna</p>
//                 <p className="menu"
//                  onMouseEnter={this.handleMouseEnter}
//                  onMouseLeave={this.handleMouseLeave}
//                 >
//                     Nacionalni parkovi</p>
//                     {this.state.isDropdownVisible && <Dropdown />}
//                 <p>Komentari</p>
//             </div>
//         );
//     }
// }

// export default Header;

import * as React from 'react';
import styles from './header.module.css';

export interface HeaderProps {

}

export interface HeaderState {
    isScrolling: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            isScrolling: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 300) { // You can adjust the scroll position where the new header appears
            this.setState({ isScrolling: true });
        } else {
            this.setState({ isScrolling: false });
        }
    };

    render() {
          const { isScrolling } = this.state;
        
        return (
            <>
            <header className={styles.mainHeader}>
              <div className={styles.innerHeaderContainer}>
                <div className={styles.overlay}>
                    <h1 className={styles.headerTitle}>Nacionalni parkovi Hrvatske</h1>
                    <p>Vestibulum a massa non purus commodo hendrerit. Donec eros arcu, fringilla at pretium sed, 
                        cursus quis nisi. Donec vel rhoncus dolor. Nulla tristique commodo sapien eu scelerisque. 
                        Ut id ullamcorper velit. Fusce non suscipit urna. Praesent auctor quam dui, vitae aliquam ligula 
                        accumsan ornare. Aenean bibendum tellus a diam mollis imperdiet. Phasellus varius purus justo, 
                        sed interdum ligula blandit in. Sed consequat rutrum lectus et laoreet.
                    </p>
                </div>
              </div>
            </header>
                <nav id="navigation" className={
                    isScrolling ? `${styles.primaryNavigation} ${styles.scrollingPrimaryNavigation}` : styles.primaryNavigation}
                    >
                    <li className={styles.logo}>
                        {isScrolling && (
                        <a href='#'>Np</a>
                         )}
                    </li>  

                    <ul>
                        <li><a href="#">Početna</a></li>
                        <li><a href="#">Nacionalni parkovi</a>
                            <ul className="dropdown">
                                <li><a href="#">NP Brijuni</a></li>
                                <li><a href="#">NP Krka</a></li>
                                <li><a href="#">NP Paklenica</a></li>
                                <li><a href="#">NP Plitvička jezera</a></li>
                                <li><a href="#">NP Kornati</a></li>
                                <li><a href="#">NP Mljet</a></li>
                                <li><a href="#">NP Risnjak</a></li>
                                <li><a href="#">NP Sjeverni Velebit</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Komentari</a></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;