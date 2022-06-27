import React from 'react'
import '../styles/Home.css';
import {Link} from 'react-router-dom';
// import bgImage from '../assets/bgImage.jpg'

function Home() {
  return (
    <div className='home' /*style={{backgroundImage: `url(${bgImage})`}}*/>
      <div className='text-box'>
        <h1>PINEWAVES PHOTOGRAPHY</h1>
        <h3>...freezing time in timeless images.</h3>
        <Link to={'/contact'}><button className='actionBtn'>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Home