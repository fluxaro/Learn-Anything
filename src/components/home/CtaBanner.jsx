import React from "react"
import { Link } from "react-router-dom"
import { siteInfo } from "../../dummydata"
import "./cta.css"

const CtaBanner = () => {
  return (
    <section className='cta-banner'>
      <div className='container'>
        <div className='cta-content'>
          <h2>{siteInfo.motto}</h2>
          <p>
            Join thousands of learners worldwide and start building the skills that will define your future.
          </p>
          <div className='cta-actions'>
            <Link to='/courses'>
              <button className='primary-btn'>
                Browse Courses <i className='fa fa-arrow-right'></i>
              </button>
            </Link>
            <Link to='/contact'>
              <button>Get in Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
