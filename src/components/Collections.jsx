import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import taj from '../assets/taj2.avif'
import food from '../assets/d2.avif'
import CDining from '../assets/dining3.avif'
import mughlai from '../assets/mug3.avif'

const Collections = () => {
  return (
    <>
      <main className='mb-64'>
            <section>
                <h1>Collections</h1>
                <section>
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</p>
                    <section className='flex items-center'>
                        All Collection in Agra
                        <IoMdArrowDropright/>
                    </section>
                </section>
                <section className='flex justify-center items-center mt-7'>
                  <section className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                    <section className='h-80 w-60'>
                      <section style={{backgroundImage: `url(${taj})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p>6 Taj View Restaurant</p>
                        <p className='flex items-center'>5 places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                    <section className='h-80 w-60'>
                      <section style={{backgroundImage: `url(${food})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p>V</p>
                        <p className='flex items-center'>13 Places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                    <section className='h-80 w-60'>
                      <section style={{backgroundImage: `url(${CDining})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p></p>
                        <p className='flex items-center'>18 Places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                    <section className='h-80 w-60'>
                      <section style={{backgroundImage: `url(${mughlai})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p>6 Taj View Restaurant</p>
                        <p className='flex items-center'>6 Places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                  </section>
                </section>
            </section>
      </main>
    </>
  )
}

export default Collections