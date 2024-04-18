import React from 'react'
import './Skills.css'
import skills_frame from '../../assets/skills-frame.png'

const Skills = () => {
  return (
    <div className='skills'>
        <div className="skill">
            <img src={skills_frame} alt="" />
        </div>
        <div className="skill">
            <img src={skills_frame} alt="" />
        </div>
        <div className="skill">
            <img src={skills_frame} alt="" />
        </div>
    </div>
  )
}

export default Skills
