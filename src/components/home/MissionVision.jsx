import React from "react"
import { mission, vision } from "../../dummydata"
import "./mission.css"

const MissionVision = () => {
  return (
    <section className='mission-vision padding'>
      <div className='container'>
        <div className='mv-grid'>
          <div className='mv-card'>
            <div className='mv-icon'>
              <i className='fa fa-bullseye'></i>
            </div>
            <h2>{mission.title}</h2>
            <p>{mission.text}</p>
          </div>
          <div className='mv-card'>
            <div className='mv-icon'>
              <i className='fa fa-eye'></i>
            </div>
            <h2>{vision.title}</h2>
            <p>{vision.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
