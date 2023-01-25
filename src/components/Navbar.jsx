import React from 'react'
import Logo from '../images/applogo.png'


export default function Navbar() {
  return (
    <nav className='app-logo'>
        <img src={Logo} alt="logo"/>
        <h3>airbnb</h3>
    </nav>
  )
}
