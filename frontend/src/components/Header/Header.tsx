import React from "react"

import { Container } from 'react-bootstrap';

// style
import style from './Header.module.css'

const Header: React.FC = () => {
    return(
        <nav>
            <li><a href="/">Home</a></li>
            <li><a href="/crypto">Crypto</a></li>
            <li><a href="/bourse">Bourse</a></li>
            <li><a href="/compte">Compte</a></li>
            <li><a href="/contact">Contact</a></li>
        </nav>
    );
}

export default Header;