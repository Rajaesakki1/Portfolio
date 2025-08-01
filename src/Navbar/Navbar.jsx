 import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <div className='Nav'>
      <img style={{ width: '90px', height: '40px' }} src='/assets/namelogo1.jpg' alt='Logo' />
      
      <ul className='nav-menu'>
        <li><a href='#Home' className='text-pink text-decoration'>Home</a></li>
        <li><a href='#About Me' className='text-pink text-decoration'>About Me</a></li>
        <li><a href='#Contact' className='text-pink text-decoration'>Contact</a></li>
        <li><a href='#Portfolio' className='text-pink text-decoration'>Portfolio</a></li>
      </ul>

      {/* Updated "Connect with me" to link to #Contact */}
      <div className='connectme'>
        <button
  className='btn'
  onClick={() => {
    const el = document.getElementById('Contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Connect with me
</button>
      </div>

      {/* Hamburger icon for mobile */}
      <button className='hamburger' aria-label='Open menu' onClick={() => setSidebarOpen(true)}>
        <span></span><span></span><span></span><span></span>
      </button>

      {/* Sidebar drawer */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <nav className={`sidebar${sidebarOpen ? ' open' : ''}`} aria-label='Mobile navigation'>
        <button className='close-btn' aria-label='Close menu' onClick={() => setSidebarOpen(false)}>
          &times;
        </button>
        <ul>
          <li><a href='#Home' onClick={() => setSidebarOpen(false)} className='text-pink text-decoration'>Home</a></li>
          <li><a href='#About Me' onClick={() => setSidebarOpen(false)} className='text-pink text-decoration'>About Me</a></li>
          <li><a href='#Contact' onClick={() => setSidebarOpen(false)} className='text-pink text-decoration'>Contact</a></li>
          <li><a href='#Portfolio' onClick={() => setSidebarOpen(false)} className='text-pink text-decoration'>Portfolio</a></li>
        </ul>

       
      

      </nav>
    </div>
  )
}

export default Navbar
