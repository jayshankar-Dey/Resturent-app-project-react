
"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

const Hero = () => {
  useEffect(()=>{
    Aos.init({
      offset:300,
      duration:400,
      easing:'ease-in-sine'
    })
  },[])
  return (
   <section id='hero' className='w-full flex lg:flex-row flex-col  justify-between items-start '>

    <div id='image-section' className='lg:w-[50%] w-full'>
     <img data-aos="zoom-in" src={"images/hero.jpg"} alt="" className='bg-cover bg-center' />
    </div>

    <div id='content-section' className='lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-10'>
    <img src="images/logo.png" alt="" data-aos="zoom-in" data-os-delay="200" width={120} height={100}/>
    <h1 data-aos="zoom-in" data-aos-delay="400" className='text-[50px] text-black text-center '>Fresh Breads <br/>Handcrafted daily</h1>
    <p data-aos="zoom-in" data-aos-dealy="600" className='text-center  text-xl text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo hic dolorem reiciendis, cupiditate laudantium cumque? Dignissimos rerum a praesentium!</p>
    <button data-aos="zoom-in" className='border-2 border-black rounded-full px-14 py-4'>READ MORE</button>
    </div>

   </section>
  )
}

export default Hero