import React from 'react'
import'./Navbar.css'
function Navbar() {
  return (
    <div  className=' text-dark text-decoration Nav'>
        <img style={{width:'90px',height:'40px'}} src='/assets/namelogo.jpg' alt=''/>
        <ul className="nav-menu">
            <li><a href='#Home' className=' text-dark text-decoration'>Home</a></li>
            <li><a href='#About Me' className=' text-dark text-decoration'>About Me</a></li>
            <li><a href='#Portfolio'className=' text-dark text-decoration'>Portfolio</a></li>
            <li><a href='#Contact'className=' text-dark text-decoration'>Contact</a></li>
        </ul>
        <div className='connectme'>Connect with me</div>
      </div>
  )
}

export default Navbar