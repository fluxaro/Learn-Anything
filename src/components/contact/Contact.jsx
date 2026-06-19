import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import { siteInfo } from "../../dummydata"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact Us' />
      <section className='contacts padding section-after-banner'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} title='Map'></iframe>
          </div>
          <div className='right row'>
            <h1>Get in Touch</h1>
            <p>Have a question about our courses or need help choosing the right program? We're here to help.</p>
            <div className='items grid2'>
              <div className='box'>
                <h4>Location</h4>
                <p>{siteInfo.address}</p>
              </div>
              <div className='box'>
                <h4>Email</h4>
                <p>{siteInfo.email}</p>
              </div>
              <div className='box'>
                <h4>Phone</h4>
                <p>{siteInfo.phone}</p>
              </div>
            </div>
            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Your Name' />
                <input type='email' placeholder='Your Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder='Your message...'></textarea>
              <button className='primary-btn' type='button'>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
