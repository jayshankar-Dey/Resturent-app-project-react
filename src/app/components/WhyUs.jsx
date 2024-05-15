
"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
const WhyUs = () => {
  useEffect(()=>{
    Aos.init({
      offset:300,
      duration:400,
      easing:'ease-in-sine'
    })
  },[])
  return (
    <section id='about' className='w-full flex lg:flex-row flex-col justify-between items-center'>
<div id='content-section' className='lg:w-[50%] h-full flex flex-col justify-center items-center gap-10 p-20'>
  <h1 className='text-center text-black  leading-[55px] text-[50px]'>Where Every Treat <br /> Tells a Tale</h1>
<p data-aos="zoom-in" data-aos-delay="200" className=' text-center text-xl text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum earum ut aliquam odit tempora porro consequatur, sint voluptate repellat?</p>
<button data-aos="zoom-in" className=' border-black border-2 rounded-full px-14 py-4 font-bold'>READ MORE</button>
</div>

<div data-aos="zoom-in" data-aos-delay="600" id='image-section' className='lg:w-[50%] w-full'>
  <img src="images/banner6.jpg" alt="" className='bg-cover bg-center' />

</div>
    </section>
  )
}

export default WhyUs