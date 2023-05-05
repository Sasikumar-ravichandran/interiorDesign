import React from 'react'
import { useState } from 'react'
import './navbar.css'
import pngegg from '../images/pngegg.png'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

const NavBar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
        <div className='container nav__container'>
            <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={pngegg} alt='Nav Logo'></img>
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {links.map(({name, path}, index) =>{
                    return (
                        <li key={index} onClick={() => setIsNavShowing(!isNavShowing)}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/>  : <GoThreeBars/>
                }
            </button>
        </div>
    </nav>
  )
}

export default NavBar
