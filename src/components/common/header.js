import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import "./header.css";

function AppHeader() {
    return (
        <div className="navbar">
            <div className="nab-logo">Address Book</div>
            <div className="nav-links">
            <Link to="/" exact  className="nav-link">Home</Link>
            <Link to="/setting" className="nav-link">Setting</Link>
            </div>
        </div>
    )
}

export default AppHeader