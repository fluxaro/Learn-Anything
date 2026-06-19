import React from "react"
import Back from "../common/back/Back"
import Expertise from "../home/Expertise"
import HAbout from "../home/HAbout"

const ExpertisePage = () => {
  return (
    <>
      <Back title='Our Expertise' />
      <section className='page-lead'>
        <div className='container'>
          <p className='page-lead-text'>
            With years of experience in digital education, Learn Anything Academy specializes in delivering comprehensive learning solutions across a wide range of disciplines. Our curriculum is continuously updated to reflect industry trends, emerging technologies, and evolving market demands.
          </p>
        </div>
      </section>
      <Expertise showAll={true} tightTop={true} />
      <HAbout />
    </>
  )
}

export default ExpertisePage
