import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import './Techology.scss'
const Techonology = () => {
    return (
        <div className='row d-flex justify-content-around mx-auto w-75' style={{ minHeight: "100vh", gap: "4rem" }}>
            <div className="item text-danger col-md-3">
                <AiFillHtml5 />
                <h4 className='text-dark'>HTML</h4>
                <p className='text-dark' style={{ fontSize: "1rem" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aut distinctio a iusto mollitia voluptatibus doloribus, beatae nostrum! Iusto laudantium aut nam excepturi maxime illo quis molestias debitis soluta culpa.</p>
            </div>
            <div className="item text-primary col-md-3">
                <DiCss3 />
                <h4 className='text-dark'>CSS</h4>
                <p className='text-dark' style={{ fontSize: "1rem" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aut distinctio a iusto mollitia voluptatibus doloribus, beatae nostrum! Iusto laudantium aut nam excepturi maxime illo quis molestias debitis soluta culpa.</p>
            </div>
            <div className="item text-warning col-md-3">
                <IoLogoJavascript />
                <h4 className='text-dark'>JAVASCRIPT</h4>
                <p className='text-dark' style={{ fontSize: "1rem" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aut distinctio a iusto mollitia voluptatibus doloribus, beatae nostrum! Iusto laudantium aut nam excepturi maxime illo quis molestias debitis soluta culpa.</p>

            </div>
        </div>
    )
}

export default Techonology