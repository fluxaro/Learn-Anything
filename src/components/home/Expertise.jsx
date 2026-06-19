import React from "react"
import { Link } from "react-router-dom"
import { expertise } from "../../dummydata"
import "./expertise.css"

const Expertise = ({ showAll = false, tightTop = false }) => {
  const items = showAll ? expertise : expertise.slice(0, 8)

  return (
    <section className={`expertise padding${tightTop ? " section-tight-top" : ""}`}>
      <div className='container'>
        <div className='expertise-header'>
          <span className='section-label'>Our Expertise</span>
          <h2 className='section-title'>Comprehensive Learning Across Disciplines</h2>
          <p className='section-desc'>
            Our curriculum is continuously updated to reflect industry trends, emerging technologies, and evolving market demands.
          </p>
        </div>
        <div className='expertise-grid'>
          {items.map((item) => (
            <div className='expertise-card' key={item.id}>
              <div className='expertise-icon'>
                <i className={`fa ${item.icon}`}></i>
              </div>
              <h3>{item.name}</h3>
              <span>{item.courses}</span>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className='expertise-cta'>
            <Link to='/expertise' className='link-btn'>
              Explore All Disciplines <i className='fa fa-arrow-right'></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Expertise
