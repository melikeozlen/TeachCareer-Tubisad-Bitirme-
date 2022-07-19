import React, { useState } from 'react'
import './Register.scss'
const Login = ({ visiblity, setVisiblity }) => {
    const [Email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Email === "melikeozlen@gmail.com" && password === "123456") {
            alert("Login Successful")
        } else { alert("Login Failed") }
    }

    if (visiblity === true) {
        return (
            <div id='Login' className='Login mx-auto' >
                <div className="exid">
                    <button className='btn btn-danger' onClick={() => setVisiblity(false)}>X</button>
                </div>

                <form action="">
                    <input className='input' type="text" placeholder='Email Adress' value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='btn btn-primary' type='password' onClick={(e) => handleSubmit(e)} >LOGİN</button>
                    <a href="#"> Or Create New Account...</a>
                </form>
            </div>
        )
    } else return null;

}

export default Login