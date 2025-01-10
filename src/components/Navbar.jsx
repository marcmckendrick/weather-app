import React from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="logo">
            <Link to="/">Weather App</Link>
        </div>
        <div className="nav-links">
            <Link to="/weatherPage">Weather Search</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
    );
};