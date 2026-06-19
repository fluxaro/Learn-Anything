import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./page-banner.css"

const pathLabels = {
  about: "About",
  courses: "Courses",
  benefits: "Benefits",
  expertise: "Expertise",
  team: "Team",
  pricing: "Pricing",
  journal: "Journal",
  contact: "Contact",
}

const Back = ({ title }) => {
  const location = useLocation()
  const segment = location.pathname.split("/")[1]
  const label = pathLabels[segment] || segment

  return (
    <section className='page-banner'>
      <div className='container'>
        <p className='page-breadcrumb'>
          <Link to='/'>Home</Link> / {label}
        </p>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Back
