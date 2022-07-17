import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Techonology from './components/Techonology/Techonology'
const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Techonology/>
      <AboutMe/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App