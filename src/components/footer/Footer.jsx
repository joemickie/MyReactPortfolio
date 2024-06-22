import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#App" className='footer__logo'>Portfolio</a>
      <ul className='permalinks'>
        <li><a href="/#App">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#testionials">Skills</a></li>
        <li><a href="/#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://x.com/Chukwue91036978"><AiOutlineTwitter/></a>
        <a href="https://www.instagram.com/chukwuemekachinemelu/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/chukwuemeka-chinemelu-034064244/"> <BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copyright; MICKIEJOE Product Designs. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer