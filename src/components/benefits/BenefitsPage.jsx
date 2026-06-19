import React from "react"
import Back from "../common/back/Back"
import Benefits from "../home/Benefits"
import WhyChoose from "../home/WhyChoose"

const BenefitsPage = () => {
  return (
    <>
      <Back title='Benefits of Online Learning' />
      <Benefits showAll={true} />
      <WhyChoose tightTop />
    </>
  )
}

export default BenefitsPage
