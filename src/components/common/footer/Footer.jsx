import React from "react"
import { Link } from "react-router-dom"
import { blog, siteInfo } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Stay Updated with {siteInfo.name}</h1>
            <span>Get the latest courses, learning tips, and industry insights delivered to your inbox.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter your email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>{siteInfo.name}</h1>
            <span>Global Online Learning Platform</span>
            <p>
              Empowering learners worldwide with accessible, innovative, and practical online education that transforms lives.
            </p>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-linkedin-in icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/benefits'>Benefits</Link></li>
              <li><Link to='/expertise'>Expertise</Link></li>
              <li><Link to='/courses'>Courses</Link></li>
              <li><Link to='/journal'>Journal</Link></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li><Link to='/team'>Our Team</Link></li>
              <li><Link to='/benefits'>Why Online Learning</Link></li>
              <li><Link to='/expertise'>All Disciplines</Link></li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Posts</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB' key={val.id}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                {siteInfo.address}
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                {siteInfo.phone}
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                {siteInfo.email}
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved. {siteInfo.motto}
        </p>
      </div>
    </>
  )
}

export default Footer
