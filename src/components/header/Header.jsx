import React from 'react'
import './header.css'
import CTA from './CTA'
import MICKIE from '../../assets/mickie.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__conta">
            <h5>Hello there, I am</h5>
            <h1>Chukwuemeka Chinemelu</h1>
            <h5 className='text-light'>Software Engineer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="mainpic">
                <img src={MICKIE} alt ="mickie" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header