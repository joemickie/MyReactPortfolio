import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/chukwuemeka-chinemelu-034064244/" target= "_blank"><BsLinkedin/></a>
        <a href="https://github.com/joemickie" target= "_blank"><FaGithub/></a>
        <a href="https://x.com/Chukwue91036978" target= "_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials