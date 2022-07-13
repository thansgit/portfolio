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
            Hi! I'm Timo, a full stack software developer and an IT-student from Tampere University. I am actively expanding my skills on the field and am currently focused on web-development. I'm currently looking to turn my interest in to a career. 
          </p>
      </div>
    </div>
  )
}

export default AboutMe
