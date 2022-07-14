import React from 'react'
import './AboutMe.scss'
import profile from '../../assets/image/profile.jpg'
const AboutMe = () => {
    return (
        <section id='about-me' className="mx-auto">
            <div className="div">
                <img src={profile} alt="" />
            </div>

            <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aperiam hic obcaecati officia provident eos iusto neque dolore impedit accusantium quibusdam vero? Libero necessitatibus adipisci tempora quaerat nisi nulla autem.</div>
        </section>
    )
}

export default AboutMe