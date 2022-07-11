import React from 'react'
import './Navbar.scss'
const Header = () => {
    return (
        <div className='w-75 row d-flex justify-content-between mx-auto mt-4' style={{height:"4rem"}}> 
            <h1 className='col-md-5 fw-bold'> MY PORTFOLIO </h1>
            <nav className='col-md-6 mx-1'>
                <ul className='d-flex justify-content-between'>
                    <li>
                        <a href="#" className='text-dark'>HOME</a>
                    </li>
                    <li>
                        <a href="#" className='text-dark'>ABOUT</a>
                    </li>
                    <li>
                        <a href="#" className='text-dark'>PROJECT</a>
                    </li>
                    <li>
                        <a href="#" className='text-dark'>CONTACT</a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header