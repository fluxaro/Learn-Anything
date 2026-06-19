import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val, index) => (
        <div className={`items shadow ${val.featured ? "featured" : ""}`} key={index}>
          {val.featured && <span className='featured-badge'>Most Popular</span>}
          <h4>{val.name}</h4>
          <h1>
            {val.price}
            <span>{val.period}</span>
          </h1>
          <p>{val.desc}</p>
          {val.features && (
            <ul className='price-features'>
              {val.features.map((feature, i) => (
                <li key={i}>
                  <i className='fa fa-check'></i> {feature}
                </li>
              ))}
            </ul>
          )}
          <button className={val.featured ? "primary-btn" : "outline-btn"}>Get Started</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
