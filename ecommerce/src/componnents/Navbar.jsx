import React from 'react'
import './navbar.css'
import { BiSearchAlt2 } from 'react-icons/bi'
 
// const Container =styled.div`
//     height: 60px;
//     background-color: black;
// `;

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-wrapper'>
            <div className='left'>
                <div className='language'>EN</div>
                <div className='SearchContainer'>
                    Input 
                    Icon <BiSearchAlt2/>
                </div>
            </div>
            <div className='center'>Center</div>
            <div className='right'>Right</div>
        </div>
        
    </div>
  )
}

export default Navbar