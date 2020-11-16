import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './index.css';


interface HeaderProps {
    location: {
      pathname: string;
    };
}
  

const Header = ({location}: HeaderProps) => {
    return(
        <header>
            <Link to="/" id="home-link">
                <Logo pathname={location.pathname}/>
            </Link>
        </header>
    )
}

export default Header;