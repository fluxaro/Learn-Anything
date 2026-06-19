import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = ({ embedded = false }) => {
  return (
    <>
      <section className={`online${embedded ? " online-embedded" : " padding section-tight-top"}`}>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val, i) => (
              <div className='box' key={i}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
