import React from 'react'
import './About.scss'
import back from '../../../assets/back1.jpg'
import back1 from '../../../assets/naruto.jpg'


const About = () => {
    return (
        <div className='about'>
            <div className="heading">
                <h1>Everything you need to<br /> know about The Hype Club</h1>
            </div>
            <div className="about-content">
                <div className="about-left">
                    <img className='frontimg' src={back1} alt="yes" />
                    <img className='backimg' src={back} alt="no" />
                </div>
                <div className="about-right">
                    <div className="border-box">
                        <div className="about-textbox">
                            <h1>Title</h1>
                            <p>Desc desc desc desc desc desc</p>
                        </div>
                        <div className="about-textbox">
                            <h1>Title</h1>
                            <p>Desc desc desc desc desc desc</p>
                        </div>
                        <div className="about-textbox">
                            <h1>Title</h1>
                            <p>Desc desc desc desc desc desc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About