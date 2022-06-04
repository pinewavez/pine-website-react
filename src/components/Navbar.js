import React from 'react'
import Logo from '../assets/pineArtsLogo.png'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div className='leftSide'>
            <img src={Logo} className='logo' alt='logo' />
        </div>
        <div className='rightSide'>
           <NavLink to={"/"}>Home</NavLink>
           <NavLink to={"/gallery"}>Gallery</NavLink>
           <NavLink to={"/about"}>About</NavLink>
           <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar