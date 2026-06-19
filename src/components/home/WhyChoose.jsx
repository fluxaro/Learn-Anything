import React from "react"
import { whyChoose } from "../../dummydata"
import "./whychoose.css"

const WhyChoose = ({ tightTop = false }) => {
  return (
    <section className={`why-choose padding${tightTop ? " section-tight-top" : ""}`}>
      <div className='container'>
        <div className='why-grid'>
          <div className='why-content'>
            <span className='section-label'>Why Choose Us</span>
            <h2 className='section-title'>Why Choose Learn Anything Academy?</h2>
            <p className='section-desc'>
              We go beyond traditional online courses to deliver a learning experience that produces real-world results and lasting career impact.
            </p>
          </div>
          <div className='why-items'>
            {whyChoose.map((item) => (
              <div className='why-item' key={item.id}>
                <div className='why-icon'>
                  <i className={`fa ${item.icon}`}></i>
                </div>
                <div className='why-text'>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
