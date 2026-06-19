import React from "react"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import MissionVision from "../home/MissionVision"
import WhyChoose from "../home/WhyChoose"
import Awrapper from "./Awrapper"
import "./about.css"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <section className='about-intro padding section-after-banner'>
        <div className='container'>
          <div className='about-intro-grid'>
            <div className='about-intro-text'>
              <span className='section-label'>Our Story</span>
              <h2 className='section-title'>Education That Transforms Lives</h2>
              <p>
                At Learn Anything Academy, we believe learning never stops. Our mission is to provide affordable, flexible, and high-quality online education that equips individuals with the knowledge and skills needed to thrive in an increasingly digital world.
              </p>
              <p>
                We partner with industry experts, educators, and professionals to create practical courses that focus on real-world application rather than theory alone. Our learning environment encourages curiosity, creativity, and continuous improvement, enabling students to learn at their own pace while receiving support from experienced mentors.
              </p>
            </div>
            <div className='about-intro-image'>
              <img src='./images/about.webp' alt='Students learning online' />
            </div>
          </div>
        </div>
      </section>
      <AboutCard />
      <Awrapper />
      <WhyChoose />
      <MissionVision />
    </>
  )
}

export default About
