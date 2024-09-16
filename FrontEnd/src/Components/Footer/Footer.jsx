import React from 'react'
import { RxGithubLogo } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import './Footer.scss'

const Footer = () => {
  const open=(link)=>{
    window.open(link,'_blank');
  }
  return (
    <footer>
        <div id='one'>
            Developed By {process.env.React_APP_Name}
        </div>
        <div id='two'>
            Copyright<span>&copy;2024</span>
        </div>
        <div id='three'>
            <p><RxGithubLogo onClick={() =>open('https://github.com/farhanabbasi457')} /></p>
            <p><AiFillInstagram onClick={() =>open('https://www.instagram.com/farhanabbasi4t4/?next=%2F')} /></p>
            <p><FaFacebook onClick={() =>open('https://www.facebook.com/profile.php?id=100066348360601')} /></p>
            <p><IoLogoLinkedin onClick={() =>open('https://www.linkedin.com/in/muhammad-farhan-650b7828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appF')} /></p>
        </div>
    </footer>
  )
}

export default Footer