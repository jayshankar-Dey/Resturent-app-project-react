"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { menus } from '../../../public/images/export'
const OurMenus = () => {
  useEffect(()=>{
    Aos.init({
      offset:300,
      duration:400,
      easing:'ease-in-sine'
    })
  },[])
  return (
    <section id='menu' className='w-full bg-cover bg-center h-fit flex-col justify-center items-center flex gap-10 py-20 lg:px-20 px-10'style={{backgroundImage:`url('/images/banner10.jpg')`}}>
<h1 data-aos="zoom-in" data-aos-delay="200" className='text-center text-[55px] text-white font-semibold '>Our Fresh menues</h1>
<div data-aos="zoom-in" data-aos-delay="200" className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4'>
{
  menus.map((items,index)=>(
    <div key={index} className='flex flex-col justify-start  items-start gap-4 p-10 bg-black rounded-xl h-60 opacity-75'>
      <h1 className='text-white font-semibold  text-2xl'>{items.title}</h1>
<p className='text-lg text-slate-200'>{items.about}</p>
    </div>
  ))
}
</div>
    </section>
  )
}

export default OurMenus