import React from 'react'
import './Home.scss'
import Person from '../../Images/farhan.jpeg'
import { PiHandWavingFill } from "react-icons/pi";
import { RxGithubLogo } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import { useEffect } from 'react';

const Home = () => {
  const open=(link)=>{
    window.open(link,'_blank');
  }
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <section>
        <div>
          <p>Hi There! <PiHandWavingFill id='two' /></p>
          <p>I'M <span>{process.env.React_APP_Name}</span></p>
          <p id='one'><strong>Web Developer</strong></p>
        </div>
        <div>
          <img src={Person} alt='person-img'></img>
        </div>
      </section>
      <section>
        <div id='secondsectiondiv'>
          <p className='p1'>LET ME <span>INTRODUCE </span>MYSELF</p>
          <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
          <p>I am fluent in classics like <span><i>C++, Javascript and Java</i></span>.</p>
          <p>My field of Interest's are building new <span><i>Web Technologies and Products</i></span> and also in areas related to<span><i> Blockchain</i></span>.</p>
          <p>Whenever possible, I also apply my passion for developing products with <span><i>Node.js</i></span> and <span><i>Modern Javascript Library and Frameworks</i></span> like <span><i>React.js and Next.js</i></span></p>
        </div>
      </section>
      <div className='contact'>
        <h2>FIND ME ON</h2>
        <div>
            <p><RxGithubLogo onClick={() =>open('https://github.com/farhanabbasi457')} /></p>
            <p><AiFillInstagram onClick={() =>open('https://www.instagram.com/farhanabbasi4t4/?next=%2F')} /></p>
            <p><FaFacebook onClick={() =>open('https://www.facebook.com/profile.php?id=100066348360601')} /></p>
            <p><IoLogoLinkedin onClick={() =>open('https://www.linkedin.com/in/muhammad-farhan-650b7828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appF')} /></p>
        </div>
        
      </div>
    </>
  )
}

export default Home