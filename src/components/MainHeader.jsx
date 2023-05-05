import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import mainheaderimg from '../images/mainheaderimg.jpeg'
import '../pages/home/home.css'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#High-end Interior Design</h4>
          <h1>New Level of Interior</h1>
          <p>
          We pride ourselves on beign builders-creating architectural and creatie solutions to help people realize their vision and make them a reality. Wanna work with us
          </p>
          <Link to="/products" className='btn lg'>View products</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src={mainheaderimg} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
