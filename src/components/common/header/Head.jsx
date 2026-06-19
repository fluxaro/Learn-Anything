import React from "react"
import { siteInfo } from "../../../dummydata"

const Head = () => {
  return (
    <section className='head'>
      <div className='container flexSB'>
        <div className='logo'>
          <h1>{siteInfo.name}</h1>
          <span>Global Online Learning Platform</span>
        </div>
        <div className='social'>
          <i className='fab fa-facebook-f icon'></i>
          <i className='fab fa-instagram icon'></i>
          <i className='fab fa-twitter icon'></i>
          <i className='fab fa-linkedin-in icon'></i>
        </div>
      </div>
    </section>
  )
}

export default Head
