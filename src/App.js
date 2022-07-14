import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Techonology from './components/Techonology/Techonology'
const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Techonology/>
      <AboutMe/>
      <Contact/>
    </>
  )
}

export default App