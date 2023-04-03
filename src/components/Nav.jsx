import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <ul className="navbar_links">
        <li className="navbar_item">
          <NavLink to="/home" className="navbar_link">
            Acceuil
          </NavLink>
        </li>
        <li className="navbar_item">
          <NavLink to="/notre_carte" className="navbar_link">
            Notre carte
          </NavLink>
        </li>
        <li className="navbar_item">
          <NavLink to="/Apropos" className="navbar_link">
            A propos
          </NavLink>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar"></span>
      </button>
    </nav>
  )
}

export default Nav
