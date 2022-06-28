import React, {useState} from 'react'
import Logo from '../assets/pineArtsLogo.png'
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css';
import {FaBars} from 'react-icons/fa'
// import {FaWindowClose} from 'react-icons/fa'


function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(!isOpen)
  };
  return (

    <div className="navBar">
        <div className='leftSide'>
            <img src={Logo} className='logo' alt='logo' />
        </div>

        <div className="rightSide">
          <div className='links' id={isOpen ? "open" : "closed"}> 
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/gallery"}>Gallery</NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
          </div>
          <button className="open" onClick={toggleNav}><FaBars/></button>
          {/* <button className="close" onClick={toggleNav}><FaWindowClose/></button> */}
        </div>
    </div>
  )
}

export default Navbar