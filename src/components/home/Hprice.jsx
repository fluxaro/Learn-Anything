import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <div className='container'>
          <Heading subtitle='Flexible Plans' title='Pricing & Packages' />
          <div className='price grid'>
            <PriceCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hprice
