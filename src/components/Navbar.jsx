import React from 'react'
import { CiMobile1 } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center p-7 text-white'>
      <section className='flex items-center '>
        <CiMobile1/>
        <p>Get the App</p>
      </section>
      <section className='flex list-none items-center gap-7 text-xl'>
        <li>Investor Relations</li>
        <li>Add restaurant</li>
        <li>Log in</li>
        <li>Sign up</li>
      </section>
    </nav>
  )
}

export default Navbar