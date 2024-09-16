import React from 'react'
import p1 from '../../../Images/p1.png'
import p2 from '../../../Images/p2.png'
import p3 from '../../../Images/p3.png'
import './Project.scss'
import { RxGithubLogo } from "react-icons/rx";
import { MdDisplaySettings } from "react-icons/md";

import { useEffect } from 'react';

const Project = () => {
  const open=(link)=>{
    window.open(link,'_blank');
  }
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div className='Project'>
            <div>
                <p className='one'>My Recent<span> Works</span></p>
                <p>Here are a few projects I've Worked on recently</p>
            </div>
            <div className='boxex'>
                <div className='firstbox'>
                  <div className='secondbox'>
                     <img src={p1} alt='p1'/>
                     <p className='p1'>Food App</p>
                     <p id='desc'>Abbasifoods Billing System is a comprehensive solution designed to automate the billing process and provide valuable insights into sales performance. By efficiently creating bills, generating thermal prints, and tracking employee sales, this system streamlines operations and enhances customer satisfaction. Additionally, it empowers administrators to monitor inventory levels and make informed decisions based on accurate sales data.</p >
                     <button onClick={() =>open('https://github.com/farhanabbasi457/Abbasifoods')}><RxGithubLogo/>GitHub</button>
                     <button onClick={() =>open('https://abbasifoods.netlify.app')}><MdDisplaySettings />Demo</button>
                  </div>
                </div>
                <div className='firstbox'>
                  <div className='secondbox'>
                     <img src={p2} alt='p2'/>
                     <p className='p1'>Netflix</p>
                     <p id='desc'>Creating a Netflix clone involves building a robust streaming platform that allows users to browse a vast library of movies and TV shows, create personalized watchlists, and enjoy seamless streaming across devices. It requires integrating secure payment gateways, user authentication, and a recommendation engine to enhance user experience, while maintaining high-quality video delivery and scalability for millions of users.</p>
                     <button onClick={() =>open('https://github.com/farhanabbasi457/Netflix')}><RxGithubLogo/>GitHub</button>
                     <button onClick={() =>open('https://abbasinnf.netlify.app')}><MdDisplaySettings />Demo</button>
                  </div>
                </div>
                <div className='firstbox'>
                  <div className='secondbox'>
                     <img src={p3} alt='p3'/>
                     <p className='p1'>Book App</p>
                     <p id='desc'>Creating a book app involves building a robust platform for browsing and reading books by author, title, and category. It requires user-friendly features like personalized reading lists, recommendations, and efficient search. The app must support user authentication, secure data, and a smooth reading experience across devices. Administrators manage authors, books, and categories while ensuring scalability, security, and high performance for a large user base.</p >
                     <button onClick={() =>open('https://github.com/farhanabbasi457/BookApp')}><RxGithubLogo/>GitHub</button>
                     <button onClick={() =>open('https://abbasibookapp.netlify.app')}><MdDisplaySettings />Demo</button>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Project