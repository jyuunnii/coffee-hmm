import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface FooterProps {
    location: {
      pathname: string;
    };
}

const Footer = ({location}: FooterProps) => {
    return(
        <footer>
            <Link to="/"><span className="material-icons">home</span>home</Link>
            <Link to="/signin"><span className="material-icons">person</span>login</Link>
        </footer>
    )
}

export default Footer;