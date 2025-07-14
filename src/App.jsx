import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App