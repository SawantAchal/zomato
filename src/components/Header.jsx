import React from 'react'
import bgImage from '../assets/nav-bg.avif';
import Navbar from './Navbar';
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-cover bg-center h-[60vh] text-white" style={{backgroundImage: `url(${bgImage})`}}>
      <Navbar/>
      <main>
        <h1 className='text-8xl font-bold'><em>Zomato</em></h1>
        <p className='text-4xl'>Discover the best food & drinks in <span className='font-bold'>Agra</span></p>
        <section className='flex justify-center '>
        <section className='md:bg-white text-gray-500 md:h-12 rounded-md md:w-[50%] flex justify-evenly  md:flex-row flex-col md:divide-x-2 items-center w-full gap-y-3'>
          <section className='flex items-center w-[25%] justify-between m-0 bg-white'>
            <section className='flex items-center gap-1 w-full'>
              <FaLocationDot className='text-red-500 text-xl'/>
              <p>Agra</p>
            </section>
            <section>
              <MdOutlineArrowDropDown className='text-3xl w-full'/>
            </section>
          </section>
          <section className='flex items-center bg-transparent w-[55%] gap-1 bg-white'>
            <CiSearch className='text-3xl'/>
            <input type='search' placeholder='Search for restaurant, cuisine or a dish' className='bg-transparent w-full' />
          </section>
        </section>
        </section>
      </main>
    </header>
  )
}

export default Header