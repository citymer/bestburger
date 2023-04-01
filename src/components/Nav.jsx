import React from 'react';
import { useState } from 'react';

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
          
            <ul className="navbar_links">
                <li className="navbar_item">
                    <a href="/home" className="navbar_link">Acceuil</a>
                </li>
                <li className="navbar_item">
                    <a href="/carte" className="navbar_link">Notre carte</a>
                </li>
                <li className="navbar_item">
                    <a href="/Apropos" className="navbar_link">A propos</a>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    );
};

export default Nav;