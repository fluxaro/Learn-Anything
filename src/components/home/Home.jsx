import React from "react"
import Intro from "./Intro"
import Benefits from "./Benefits"
import Expertise from "./Expertise"
import HAbout from "./HAbout"
import WhyChoose from "./WhyChoose"
import Testimonal from "./testimonal/Testimonal"
import MissionVision from "./MissionVision"
import Hblog from "./Hblog"
import Hprice from "./Hprice"
import CtaBanner from "./CtaBanner"
import Hero from "./hero/Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Benefits />
      <Expertise />
      <HAbout />
      <WhyChoose />
      <Testimonal />
      <MissionVision />
      <Hblog />
      <Hprice />
      <CtaBanner />
    </>
  )
}

export default Home
