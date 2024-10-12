import React from 'react'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'
import './About.css'

const About = () => {
  return (
    <div className='about'>
         <div className="about-left">
            <img src={about_img} alt="about-img"  className='about-img'/>
            <img src={play_icon} alt="play-icon" className='play-icon'/>
         </div>
         <div className="about-right">
            <h2>About UNIVERSITY</h2>
            <h3>Nuturing Tomorrow's Leaders Today</h3>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with knowledge , skills and experience needed to excel in the dynamic field of education</p>
            <p>With a focus on innovation, hands on experience and with a personalised mentorship. Our program prepare aspiring educators to make a meaningful impact in the classroom, schools and communities. </p>
            <p>Wehter you aspire to become a teacher, administrator, counselor and educational Leader, our diverse range of programs offer a pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
         </div>
    </div>
  )
}

export default About