import React from 'react'
import './Resume.scss'
import { useEffect } from 'react'
import pdfUrl from '../../../Images/farhanCV.pdf'
import CVpic from '../../../Images/CVpic.jpg'
import { MdOutlineFileDownload } from "react-icons/md";

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='resume'>
            <button className='button'><MdOutlineFileDownload /> <a href={pdfUrl}>Download CV</a></button>
            <img src={CVpic} alt='CVPIC'/>
            <button className='button1'><MdOutlineFileDownload /> <a href={pdfUrl}>Download CV</a></button>
        </div>
    )
}

export default Resume