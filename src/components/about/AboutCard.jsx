import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"

const AboutCard = () => {
  return (
    <section className='aboutHome padding'>
      <div className='container flexSB'>
        <div className='left row'>
          <img src='./images/about.webp' alt='Online learning benefits' />
        </div>
        <div className='right row'>
          <Heading subtitle='What We Offer' title='A Better Way to Learn Online' />
          <div className='items'>
            {homeAbout.map((val) => (
              <div className='item flexSB' key={val.id}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCard
