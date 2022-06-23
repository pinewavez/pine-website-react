import React from 'react'
import Logo from '../assets/pineArtsLogo.png'
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navBar">
        <div className='leftSide'>
            <img src={Logo} className='logo' alt='logo' />
        </div>
        <div className='rightSide'>
           <NavLink to={"/"}>Home</NavLink>
           <NavLink to={"/gallery"}>Gallery</NavLink>
           <NavLink to={"/about"}>About</NavLink>
           <NavLink to={"/contact"}>Contact</NavLink>
           <button></button>
        </div>
    </div>
  )
}

export default Navbar