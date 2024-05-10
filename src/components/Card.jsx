import React from 'react'
import order from '../assets/online-bg.avif'
import dining from '../assets/dining.avif'
import clubs from '../assets/clubs.avif'

const Card = () => {
  return (
    <main className='flex justify-center items-center mt-7'>
        <main className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-[65%]'>
            <section className='border border-gray-500 rounded-md h-52 w-80' >
                <img src={order}  alt='order online'  className='h-36 w-full rounded-t-md'/>
                <h1 className='font-bold text-xl text-gray-800 text-start pl-2'>Order Online</h1>
                <p className='text-gray-600 text-lg pl-2'>Stay home and order to your doorstep</p>
            </section>
            <section className='border border-gray-500 rounded-md h-52 w-80'>
                <img src={dining}  alt='order online' className='h-36 w-full rounded-t-md'/>
                <h1 className='font-bold text-xl text-gray-800 text-start pl-2'>Dining</h1>
                <p className='text-gray-600 text-lg pl-2'>View the city's favourite dining venues</p>
            </section>
            <section className='border border-gray-500 rounded-md h-52 w-80'>
                <img src={clubs}  alt='order online' className='h-36 w-full rounded-t-md'/>
                <h1 className='font-bold text-xl text-gray-800 text-start pl-2'>Nightlife and Clubs</h1>
                <p className='text-gray-600 text-lg pl-2'>Explore the city’s top nightlife outlets</p>
            </section>
        </main>
    </main>
  )
}

export default Card