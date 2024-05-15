
"use client"
import React from 'react'
import {FaCopyright} from 'react-icons/fa'
import {FaArrowPointer} from 'react-icons/fa6'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <>
    <section className='bg-black text-white flex w-full justify-center p-3 items-center gap-4'>
    <FaCopyright className='size-6 '/>
    <h1 className='text-lg'>Coppyright 2024,Crave Bakes All Right Reseved</h1>

    {/* scrool to top */}
    <div id='icon-box' className='bg-orange-400 text-black p-3 cursor-pointer rounded-full hover:bg-white fixed bottom-6 right-6 bu'>
      <Link to='hero' spy={true} offset={-100} smooth={true} >
        <FaArrowPointer className='h-[35px] w-[35px] '/>
      </Link>
    </div>
    </section>
    </>
  )
}

export default Footer