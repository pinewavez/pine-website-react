import React, {useState} from 'react'
import Logo from '../assets/pineArtsLogo.png'
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css';
import {FaBars} from 'react-icons/fa'

function Navbar() {
  const [isOpen, setOpen] = useState(true)
  const toggleNav = () => {
    setOpen(!isOpen)
  };
  return (

    <div className="navBar">
        <div className='leftSide' id={ isOpen ? "open" : "closed"}>
            <img src={Logo} className='logo' alt='logo' />

        <div className='hiddenLinks'>
           <NavLink to={"/"}>Home</NavLink>
           <NavLink to={"/gallery"}>Gallery</NavLink>
           <NavLink to={"/about"}>About</NavLink>
           <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        </div>

        

        <div className='rightSide'>
           <NavLink to={"/"}>Home</NavLink>
           <NavLink to={"/gallery"}>Gallery</NavLink>
           <NavLink to={"/about"}>About</NavLink>
           <NavLink to={"/contact"}>Contact</NavLink>
           <button onClick={toggleNav}><FaBars/></button>
        </div>
    </div>
  )
}

export default Navbar