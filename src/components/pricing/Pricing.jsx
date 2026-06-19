import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Pricing & Plans' />
      <section className='price padding section-after-banner'>
        <div className='container'>
          <p className='page-lead-text' style={{ marginBottom: "48px" }}>
            Choose the plan that fits your learning goals. All plans include access to our global learning community and industry-recognized certificates.
          </p>
        </div>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <section className='faq-section padding section-tight-top'>
        <Faq />
      </section>
    </>
  )
}

export default Pricing
