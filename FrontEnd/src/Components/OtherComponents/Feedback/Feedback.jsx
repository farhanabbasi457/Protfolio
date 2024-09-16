import React, { useState } from 'react'
import './Feedback.scss'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IoIosSend } from "react-icons/io";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { CiCircleRemove } from "react-icons/ci";
import BaseUrl from '../../../BaseUrl';
import axios from 'axios';
import moment from 'moment';

const Feedback = () => {

    const navigate = useNavigate();

    const [text1, settext] = useState('');
    const [star, setstar] = useState({ s1: false, s2: false, s3: false, s4: false, s5: false });

    useEffect(() => {
        window.scrollTo(0, 0);
        settext(localStorage.getItem('text') ? JSON.parse(localStorage.getItem('text')) : '');
        setstar(localStorage.getItem('stars') ? JSON.parse(localStorage.getItem('stars')) : { s1: false, s2: false, s3: false, s4: false, s5: false });
    }, []);

    useEffect(() => {
        console.log(star);
        localStorage.setItem('text', JSON.stringify(text1));
        localStorage.setItem('stars', JSON.stringify(star));
    }, [star, text1]);

    const submit = async () => {
        try {

            Object.keys(star).forEach((key) => {
                if (star[key] === false) {
                    star[key] = '☆';
                }
                else {
                    star[key] = '★';
                }
            });
            console.log(star);
            const resp = await axios.post(`${BaseUrl}/feedbacks`, {
                text: text1,
                stars: star,
                date: moment().format('LLLL')
            })

            if (resp) {
                setstar({ s1: false, s2: false, s3: false, s4: false, s5: false });
                settext('');
                localStorage.setItem('text', JSON.stringify(''));
                localStorage.setItem('stars', JSON.stringify({ s1: false, s2: false, s3: false, s4: false, s5: false }));
                alert('Thanks For Your Feedback');
                navigate('/feedback');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div id='feedback'>
            <div>
                <p id='one'>Rate Your <span>Experience</span></p>
                <p id='two'>We highly valued your feedback! Kindly take a moment to rate your experience and provide us with your valuable feedback</p>
                <div id='stars'>
                    {
                        star.s1 && star.s2 && star.s3 && star.s4 && star.s5 ? <><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s2: false, s3: false, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s3: false, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ s1: true, s2: true, s3: true, s4: true, s5: true }) }} /></> :
                            star.s1 && star.s2 && star.s3 && star.s4 ? <><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s2: false, s3: false, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s3: false, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true, s4: true }) }} /><TiStarOutline onClick={() => { setstar({ s1: true, s2: true, s3: true, s4: true, s5: true }) }} /></> :
                                star.s1 && star.s2 && star.s3 ? <><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s2: false, s3: false, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s3: false, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true }) }} /><TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true, s4: true }) }} /><TiStarOutline onClick={() => { setstar({ s1: true, s2: true, s3: true, s4: true, s5: true }) }} /></> :
                                    star.s1 && star.s2 ? <><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s2: false, s3: false, s4: false, s5: false }) }} /><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s1: true, s2: true }) }} /><TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true }) }} /><TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true, s4: true }) }} /><TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true, s4: true, s5: true }) }} /></> :
                                        star.s1 ? <><TiStarFullOutline className='fillstar' onClick={() => { setstar({ ...star, s1: true }) }} /><TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true }) }} /><TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true }) }} /><TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true, s4: true }) }} /><TiStarOutline onClick={() => { setstar({ s1: true, s2: true, s3: true, s4: true, s5: true }) }} /></> :
                                            <><TiStarOutline onClick={() => { setstar({ ...star, s1: true }) }} />
                                                <TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true }) }} />
                                                <TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true }) }} />
                                                <TiStarOutline onClick={() => { setstar({ ...star, s1: true, s2: true, s3: true, s4: true }) }} />
                                                <TiStarOutline onClick={() => { setstar({ s1: true, s2: true, s3: true, s4: true, s5: true }) }} /></>
                    }
                    <CiCircleRemove className='clear' onClick={() => {
                        settext('');
                        setstar({ s1: false, s2: false, s3: false, s4: false, s5: false });
                    }} />

                </div>
                <textarea rows="4" cols="50" placeholder="Tell us about your experience!" value={text1} onChange={(e) => settext(e.target.value)} />
                <button onClick={submit}><IoIosSend />Send</button>
            </div>
        </div>
    )
}

export default Feedback