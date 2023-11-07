import * as React from 'react';
import styles from './header.module.css';
import { Link } from "react-router-dom";

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
                    {/* <li className={styles.logo}>
                        {isScrolling && (
                        <a href='#'>Np</a>
                         )}
                    </li>   */}
                     <span className={styles.logo}>
                        {isScrolling && (
                        <a href='#'>Np</a>
                         )}
                    </span>

                    <ul>
                    <li><Link to={`/`}>Početna</Link></li>
                        <li><Link to={`/park/${0}`}>Nacionalni parkovi</Link>
                            <ul className="dropdown">
                                <li><Link to={`/park/${0}`}>NP Brijuni</Link></li>
                                <li><Link to={`/park/${1}`}>NP Krka</Link></li>
                                <li><Link to={`/park/${2}`}>NP Paklenica</Link></li>
                                <li><Link to={`/park/${3}`}>NP Plitvička jezera</Link></li>
                                <li><Link to={`/park/${4}`}>NP Kornati</Link></li>
                                <li><Link to={`/park/${5}`}>NP Mljet</Link></li>
                                <li><Link to={`/park/${6}`}>NP Risnjak</Link></li>
                                <li><Link to={`/park/${7}`}>NP Sjeverni Velebit</Link></li>
                            </ul>
                        </li>
                        <li><Link to={`/comment`}>Komentari</Link></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;