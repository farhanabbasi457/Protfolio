import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { LuFileText } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";

import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

import './Header.scss'

const Header = () => {
    const navigate =useNavigate();
    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    
    return (
        <>
        <header>
            <div onClick={()=>{navigate('/')}}>
                {process.env.React_APP_Name}
            </div>
            <nav>
                <div onClick={()=>{navigate('/')}}>
                    <IoHomeOutline />
                    <p>Home</p>
                </div>
                <div onClick={()=>{navigate('/about')}}>
                    <GoPerson />
                    <p>About</p>
                </div>
                <div onClick={()=>{navigate('/project')}}>
                    <LiaProjectDiagramSolid />
                    <p>Projects</p>
                </div>
                <div onClick={()=>{navigate('/resume')}}>
                    <LuFileText />
                    <p>Resume</p>
                </div>
                <div onClick={()=>{navigate('/feedback')}}>
                    <VscFeedback />
                    <p>Feedback</p>
                </div>

            </nav>
        </header>
        <div id='blur'>

        </div>
        </>
    )
}

export default Header