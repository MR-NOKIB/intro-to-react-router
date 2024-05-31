/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import '../ActiveLink/ActiveLink.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <NavLink to="/posts" className={({ isActive }) => isActive ? "active" : ""}>Posts</NavLink>
            <NavLink to="/friends" className={({ isActive }) => isActive ? "active" : ""}>Friends</NavLink>
        </nav>
    );
};

export default Header;  