import React from "react"
import { Link } from "react-router-dom"
import { benefits } from "../../dummydata"
import "./benefits.css"

const Benefits = ({ showAll = false }) => {
  const items = showAll ? benefits : benefits.slice(0, 6)

  return (
    <section className={`benefits padding${showAll ? " section-after-banner" : ""}`}>
      <div className='container'>
        <div className='benefits-header'>
          <span className='section-label'>Why Online Learning</span>
          <h2 className='section-title'>Benefits of Online Learning</h2>
          <p className='section-desc'>
            Discover how modern online education gives you the flexibility, affordability, and quality you need to succeed.
          </p>
        </div>
        <div className='benefits-grid'>
          {items.map((item) => (
            <div className='benefit-card' key={item.id}>
              <div className='benefit-icon'>
                <i className={`fa ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className='benefits-cta'>
            <Link to='/benefits' className='link-btn'>
              View All Benefits <i className='fa fa-arrow-right'></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Benefits
