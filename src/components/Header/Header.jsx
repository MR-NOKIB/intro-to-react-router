/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/friends">Friends</Link>
        </nav>
    );
};

export default Header;  