import React, { useEffect } from 'react'
import './Navbar.scss'
const Header = () => {
    const navBackground = () => {
        if (window.scrollY >= 66) {
            document.querySelector("#home").classList.add("bg-white");
        } else { document.querySelector("#home").classList.remove("bg-white"); }
    }
    useEffect(() => {
        window.addEventListener("scroll", navBackground)
    })

    return (
        <div id='home' className='home w-100 row d-flex justify-content-between mx-auto p-4 align-items-center ' style={{ height: "6rem" }}>
            <h1 className='col-md-5 fw-bold' style={{ fontSize: "1.2rem" }}> MY PORTFOLIO </h1>
            <nav className='col-md-6 mx-1'>
                <ul className='d-flex justify-content-between  align-items-center'>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#about-me" >ABOUT</a>
                    </li>
                    <li>
                        <a href="#" >PROJECT</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                    <div className="logim-register d-flex gap-2">
                        <li>
                            <a href="#" className='btn btn-primary'>LOGIN</a>
                        </li>
                        <li>
                            <a href="#" className='btn btn-outline-primary'>REGISTER</a>
                        </li>
                    </div>
                    <li>
                        <button>Tr</button>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Header