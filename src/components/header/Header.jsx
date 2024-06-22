import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header">
            <h2>Hello there, I am</h2>
            <h1>Chukwuemeka Chinemelu</h1>
            <h3 className='text-light'>Software Engineer</h3>
            <CTA />
            <HeaderSocials/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header