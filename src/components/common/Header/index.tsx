import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './index.css';


interface HeaderProps {
    location: {
      pathname: string;
    };
    searchValue: string;
}
  

const Header = ({location, searchValue}: HeaderProps) => {
    switch(location.pathname){
        case "/search" : 
            return(
                <header>
                    <Link to="/" id="home-link">
                        <Logo pathname={location.pathname}/>
                    </Link>
                </header>
            )
    }
    return <header></header>
}

export default Header;