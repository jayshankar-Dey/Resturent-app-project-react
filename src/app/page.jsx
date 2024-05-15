import React from 'react'
import Hero from './components/Hero'
import OurBreads from './components/OurBreads'
import WhyUs from './components/WhyUs'
import OurMenus from './components/OurMenus'
import Banner from './components/Banner'
import Clients from './components/Clients'
import Contact from './components/Contact'

const page = () => {
  return (
    <>
    <Hero/>
    <OurBreads/>
    <WhyUs/>
    <OurMenus/>
    <Banner/>
    <Clients/>
    <Contact/>
    </>
  )
}

export default page