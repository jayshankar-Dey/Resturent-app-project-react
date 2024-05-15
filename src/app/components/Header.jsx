"use client"
import React, { useState } from 'react'
import {FaXmark, FaBars} from 'react-icons/fa6'
import { Link } from 'react-scroll'
const Header = () => {
  const[ismenuOpen,setIsMenuOpen]=useState(false)
  const togglemenu=()=>[
    setIsMenuOpen(!ismenuOpen)
  ]

  const navItems=[
    {
      link:"About",
      path:"about"
    },
    {
      link:"Breads",
      path:"breads"
    },
    {
      link:"Menu",
      path:"menu"
    },
    {
      link:"Testimonials",
      path:"testimonials"
    },
    {
      link:"Contact",
      path:"contact"
    }
  ]
  return (
    <header className='w-full flex bg-black justify-between items-center lg:px-16 gap-1 px-6 py-3 top-0 z-50 sticky'>
     <img src="/images/logo.png" alt="" height={80} width={80} className='invert'/>
     <ul className='lg:flex justify-center items-center gap-10 hidden '>
  {
    navItems.map((items,index)=>(
      <Link key={index}  to={items.path}  smooth={true} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-600 hover:text-white'>{items.link}</Link>
    ))
  }
     </ul>
     <button className='bg-orange-500 text-white py-3 rounded-full px-10 font-bold hover:scale-105 transform transition-transform duration-300'>ORDER NOW </button>

     <div className='flex justify-center items-center  lg:hidden mt-3' onClick={togglemenu}>
      <div>
        {
          ismenuOpen?<FaXmark className='text-white text-3xl cursor-pointer'/>:<FaBars  className='text-white text-3xl cursor-pointer'/>
        }
      </div>
     </div>
     <div className={`${ismenuOpen?'flex':'hidden'} w-full absolute h-fit bg-black p-4 top-[80px] left-0`}>
     <ul className='flex flex-col justify-center items-center gap-10  w-full '>
  {
    navItems.map((items,index)=>(
      <Link key={index}  to={items.path}  smooth={true} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-600 hover:text-white text-center block w-full mx-20'>{items.link}</Link>
    ))
  }
     </ul>
     </div>
    </header>
  )
}

export default Header