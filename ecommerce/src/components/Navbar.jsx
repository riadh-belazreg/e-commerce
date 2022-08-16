import React from 'react'

import './navbar.css'
import { BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
  return (

    <div className='navbar-container'>
       <div className='navbar-wrapper'>
            <div className='left'>
                <div className='language'>EN</div>
                <div className='SearchContainer'>
                    input
                    icon <BiSearchAlt2/>
                </div>
            </div>

            <div className='center'>center</div>
            <div className='right'> right</div>
        </div> 
    </div>
  )
}

export default Navbar