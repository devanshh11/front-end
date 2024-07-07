import React from "react";
import logo from '../icons_assets/Logo.svg'
import '../App.css'
import { useState } from "react";
export const Nav = (props) => {
  const [menuOpen,setMenuopen] = useState(false);
  const toggleMenu = ()=>{
    setMenuopen(!menuOpen);
  }

  return (
      <>
        <nav className={`navbar ${menuOpen ? "open": ""}`}>
          <a href="#" className="logo">
            <img src={logo} alt="little lemon" />
          </a>

          {/* mobile navbar */}
          <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          </div>
          {/* nav item */}
          <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </>
  );
};