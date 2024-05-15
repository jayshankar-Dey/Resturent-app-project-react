"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import {FaQuoteLeft} from 'react-icons/fa'
import { clients } from '../../../public/images/export'
const Contact = () => {
  useEffect(()=>{
    Aos.init({
      offset:200,
      duration:400,
      easing:'ease-in-sine'
    })
  },[])
  return (
    <section id='contact' className='w-full flex flex-col justify-start items-end gap-20 bg-cover h-fit lg:py-20 py-10 lg:px-20 px-10 bg-center' style={{backgroundImage:`url('/images/banner.jpg')`}}>
      <div className='lg:w-[40%] w-full '>

      </div>
      
      <div className='lg:w-[60%] w-full flex flex-col justify-start items-center gap-10 '>
<h1 data-aos="zoom-in" className='text-[55px] text-black font-semibold text-center '>Contact Us</h1>
<p data-aos="zoom-in"  className='text-xl text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur voluptas autem ea distinctio, molestias magnam consequatur praesentium totam blanditiis.</p>

<div className='flex flex-col justify-center items-center gap-6 lg:w-[80%] w-full'>
  <div id='form-box' className='grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-4 w-full'>

    <div className='w-full flex flex-col justify-center items-start gap-2'>
    <h1 className='text-lg font-semibold text-black ' > Full Name</h1>
    <input type="text" placeholder='Enter your full name' className='bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400'/>
    </div>

    <div className='w-full flex flex-col justify-center items-start gap-2'>
    <h1 className='text-lg font-semibold text-black ' >Email</h1>
    <input type="text" placeholder='Enter your full name' className='bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400'/>
    </div>

    <button className='w-full bg-black px-6 py-3 rounded-full text-white font-semibold lg:mt-8'>SUBMIT</button>
  </div>
  <div   id='address-box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-end items-start gap-6 mt-10 '>
   <div className='flex flex-col justify-center items-start pap-3'>
     <h1 className='text-black font-black text-2xl '>
      FIND US
     </h1>
     <p>121 Rock Street, 21 <br /> Avenue new york NY 2904</p>
   </div>

   <div className='flex flex-col justify-center items-start pap-3'>
     <h1 className='text-black font-black text-2xl '>
      FIND US
     </h1>
     <p>121 Rock Street, 21 <br /> Avenue new york NY 2904</p>
   </div>
  </div>

</div>
     </div>

    </section>
  )
}

export default Contact