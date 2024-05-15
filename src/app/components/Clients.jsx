"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import {FaQuoteLeft} from 'react-icons/fa'
import { clients } from '../../../public/images/export'
const Clients = () => {
  useEffect(()=>{
    Aos.init({
      offset:300,
      duration:400,
      easing:'ease-in-sine'
    })
  },[])
  return (
    <section id='testimonials' className='w-full flex flex-col justify-center items-center gap-20 bg-cover h-fit py-20 lg:px-10 bg-center'style={{backgroundImage:`url('/images/banner1.jpg')`}}>
  

  <h3 data-aos="zoom-in" data-aos-delay="400"  className='text-[55px] text-white font-semibold text-center'>What our Client says</h3>

  <div data-aos="zoom-in" data-aos-delay="200" className='w-full grid lg:grid-cols-4  grid-cols-1 justify-center items-center lg:gap-8 gap-20'>
{
  clients.map((items,index)=>(
    <div key={index} className='flex flex-col justify-center items-start  gap-4 bg-orange-600 p-10 h-[350px]  rounded-xl relative mx-5 '>
      <div id='icon-box' className='bg-white p-6 rounded-full text-orange-600 absolute -top-10'>
      <FaQuoteLeft className='size-10'/>
      </div>
      <p className='text-white text-lg'>{items.about}</p>

      <h1 className='text-white text-xl font-bold uppercase'>{items.name}</h1>
    </div>
  ))
}
  </div>
    </section>
  )
}

export default Clients