import React from 'react'
import './About.scss'
import { TbArrowBigRightLinesFilled,TbBrandCpp } from "react-icons/tb";
import { GrJs ,GrWindows } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { FaReact ,FaJava ,FaPython ,FaGithub ,FaDev} from "react-icons/fa";
import { SiMongodb ,SiPostman ,SiAndroidstudio ,SiVisualstudio} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import sidepic from '../../../Images/about.png'

import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0);
      }, [])
    return (
        <>
        <div className='about'>
            <div>
                <p id='one'>Know Who <span>I'M</span></p>
                <p>Hi Everyone, I am <span>{process.env.React_APP_Name}</span> from <span>Islamabad, Pakistan.</span><br/>
                    I am currently intern as a web developer at PMAS UIIT.<br/>
                    I am currently enrolled in (BSCS) PMAS ARID Agriculture University in the 7th semester.

                    
                    <p id='two'>Apart from coding, some other activities that I love to do!</p>

                    <TbArrowBigRightLinesFilled className='arrow'/> Playing Games<br/>
                    <TbArrowBigRightLinesFilled className='arrow'/> Playing Cricket<br/>
                    <TbArrowBigRightLinesFilled className='arrow'/> Travelling </p>
                <p id='three'>"Create with purpose, and let your work leave a lasting impact!"
                    <p>~fariabbasi</p>
                </p>
            </div>
            <img src={sidepic} alt='about-img'></img>
        </div>
        <div className='about1'>
            <div>
                <p className='one'>Professional <span>Skillset</span></p>
            </div>
            <div className='boxex'>
                <div className='firstbox'><div className='secondbox'><TbBrandCpp /></div></div>
                <div className='firstbox'><div className='secondbox'><GrJs /></div></div>
                <div className='firstbox'><div className='secondbox'><DiNodejs /></div></div>
                <div className='firstbox'><div className='secondbox'><FaReact /></div></div>
                <div className='firstbox'><div className='secondbox'><SiMongodb /></div></div>
                <div className='firstbox'><div className='secondbox'><FaGitAlt /></div></div>
                <div className='firstbox'><div className='secondbox'><FaJava /></div></div>
                <div className='firstbox'><div className='secondbox'><FaPython /></div></div>
            </div>
        </div>
        <div className='about1'>
            <div>
                <p className='one'><span>Tools </span>I use</p>
            </div>
            <div className='boxex'>
                <div className='firstbox'><div className='secondbox'><GrWindows /></div></div>
                <div className='firstbox'><div className='secondbox'><VscVscode/></div></div>
                <div className='firstbox'><div className='secondbox'><SiPostman /></div></div>
                <div className='firstbox'><div className='secondbox'><SiAndroidstudio /></div></div>
                <div className='firstbox'><div className='secondbox'><SiVisualstudio /></div></div>
                <div className='firstbox'><div className='secondbox'><SiMongodb/></div></div>
                <div className='firstbox'><div className='secondbox'><FaGithub /></div></div>
                <div className='firstbox'><div className='secondbox'><FaDev /></div></div>
            </div>
        </div>
        </>
    )
}

export default About