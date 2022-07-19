import React, { useEffect, useState } from 'react'
import Login from '../Register/Login';
import './Navbar.scss'
const Navbar = () => {

    const [lang, setLang] = useState("TR");
    const [modal, setModal] = useState(false)
    const navBackground = () => {
        if (window.scrollY >= 66) {
            document.querySelector("#home").classList.add("bg-white");
        } else { document.querySelector("#home").classList.remove("bg-white"); }
    }
    useEffect(() => {
        window.addEventListener("scroll", navBackground)
    })
    const registerOpen = () => {
        if (modal === false) {
            setModal(true)
        } else setModal(false);
    }
    return (
        <>
            <div id='home' className='home w-100 row d-flex justify-content-between mx-auto p-4 align-items-center ' style={{ height: "6rem" }}>
               <div className='col-md-2 logo'> <h1 className='fw-bold' style={{ fontSize: "1.2rem" }}> MY PORTFOLIO </h1></div>
                <nav className='col-md-9 mx-1 d-flex justify-content-between align-items-center'>
                    <ul className='d-flex justify-content-between  align-items-center gap-2' style={{ width: "50%" }}>
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
                    </ul>
                    <div className="button d-flex gap-3 justify-content-between">
                        <button className='btn btn-info text-light' onClick={()=>setModal(true)}>
                            LOGIN
                        </button>
                        <button className='btn btn-info text-light' onClick={() => setLang(lang === "TR" ? "ENG" : "TR")}>
                            {lang}
                        </button>
                    </div>
                </nav>

            </div>
            <Login visiblity={modal} setVisiblity={setModal}/>
        </>
    )
}

export default Navbar