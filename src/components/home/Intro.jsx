import React from "react"
import { introText, siteInfo } from "../../dummydata"
import "./intro.css"

const Intro = () => {
  return (
    <section className='intro padding'>
      <div className='container'>
        <div className='intro-header'>
          <span className='section-label'>About {siteInfo.name}</span>
          <h2 className='section-title'>A Global Platform for Lifelong Learning</h2>
        </div>
        <div className='intro-grid'>
          <div className='intro-text'>
            {introText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className='intro-stats'>
            <div className='stat-card'>
              <span className='stat-number'>50K+</span>
              <span className='stat-label'>Learners Enrolled</span>
            </div>
            <div className='stat-card'>
              <span className='stat-number'>12</span>
              <span className='stat-label'>Disciplines</span>
            </div>
            <div className='stat-card'>
              <span className='stat-number'>200+</span>
              <span className='stat-label'>Expert Instructors</span>
            </div>
            <div className='stat-card'>
              <span className='stat-number'>350+</span>
              <span className='stat-label'>Courses Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
