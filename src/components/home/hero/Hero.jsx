import React from "react"
import { Link } from "react-router-dom"
import { siteInfo } from "../../../dummydata"
import "./Hero.css"

const avatars = [
  "./images/team/t1.webp",
  "./images/team/t2.webp",
  "./images/team/t3.webp",
]

const Hero = () => {
  return (
    <section className='hero-shell'>
      <div className='container-wide'>
        <div className='hero-card'>
          <img className='hero-bg' src='./images/bg.webp' alt='' aria-hidden='true' />

          <svg className='hero-blob' viewBox='0 0 600 700' preserveAspectRatio='none' aria-hidden='true'>
            <defs>
              <linearGradient id='heroBlueGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#1d4ed8' />
                <stop offset='45%' stopColor='#2563eb' />
                <stop offset='100%' stopColor='#3b82f6' stopOpacity='0.85' />
              </linearGradient>
            </defs>
            <path
              d='M0,0 H420 C380,120 460,220 400,340 C340,460 480,560 380,700 H0 V0 Z'
              fill='url(#heroBlueGrad)'
            />
            <path
              d='M0,0 H380 C340,100 420,180 360,300 C300,420 440,520 340,700 H0 V0 Z'
              fill='url(#heroBlueGrad)'
              opacity='0.6'
            />
          </svg>

          <div className='hero-content'>
            <h1>
              Unlock Your Potential
              <br />
              Through Modern Learning
            </h1>
            <p>
              {siteInfo.name} helps students, professionals, and lifelong learners acquire valuable skills through expertly designed courses, interactive experiences, and industry-relevant training.
            </p>
            <Link to='/courses' className='hero-cta'>
              Get Started
              <span className='hero-cta-arrow'>
                <i className='fa fa-arrow-right'></i>
              </span>
            </Link>
          </div>

          <div className='hero-proof'>
            <div className='hero-avatars'>
              {avatars.map((src, i) => (
                <img key={i} src={src} alt='' />
              ))}
              <span className='hero-avatars-more'>
                <i className='fa fa-plus'></i>
              </span>
            </div>
            <div className='hero-proof-text'>
              <strong>50k+</strong>
              <span>Active learners enrolled world-wide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
