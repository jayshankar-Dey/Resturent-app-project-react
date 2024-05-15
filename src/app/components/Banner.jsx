"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { menus } from '../../../public/images/export'
const Banner = () => {
  useEffect(()=>{
    Aos.init({
      offset:300,
      duration:400,
      easing:'ease-in-sine'
    })
  },[])
  return (
    <section className='w-full flex flex-col justify-center items-center gap-6 py-20 lg:px-20 px-10'>
      <h1 data-aos="zoom-in" className='text-[50px] text-black text-center  leading-[60px] '>Our Freshly bread is the <br /> hero of our breakfast menu</h1>
      <p data-aos="zoom-in" className='text-xl text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi repellat dolore quaerat qui eum. Doloremque repudiandae nemo quos incidunt odio, voluptatibus, deleniti suscipit autem velit aliquam sequi. Nobis, repellat.</p>
      <button data-aos="zoom-in" data-aos-delay="400" className='border-2 border-black rounded-full px-14 py-4 font-bold'>READ MORE</button>

      <div className='w-full bg-cover bg-center flex flex-col justify-center items-center'>
        <img src="/images/banner3.jpg" alt="" className='h-96 w-96 lg:w-[600px]'/>

      </div>

    </section>
  )
}

export default Banner