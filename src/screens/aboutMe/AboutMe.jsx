import React from 'react'
import './aboutMe.css'
import person from '../../images/me.jpg'

function AboutMe() {
  return (
    <div className="about__container" id="about-me" >
      <div >
        <img src={person} alt="person"></img>
      </div>
      <div className="about__text">
          <h1>ABOUT ME</h1>
          <p>
            Hi! I'm Timo, an IT student, and a software developer from Tampere. I am actively expanding my skills on the field and am currently focused on web-development. I am looking to turn my interest in a career. 
          </p>
      </div>
    </div>
  )
}

export default AboutMe
