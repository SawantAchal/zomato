import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import taj from '../assets/taj-mehal.avif'
import food from '../assets/food.avif'
import CDining from '../assets/collection-dining.avif'
import mughlai from '../assets/moglahi.avif'

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
                <section className='grid md:grid-cols-4 grid-cols-2'>
                    <section className='h-72 w-96'>
                      <section style={{backgroundImage: `url(${taj})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p>6 Taj View Restaurant</p>
                        <p className='flex items-center'>5 places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                    <section className='h-72 w-96'>
                      <section style={{backgroundImage: `url(${food})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p>V</p>
                        <p className='flex items-center'>5 places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                    <section className='h-72 w-96'>
                      <section style={{backgroundImage: `url(${CDining})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p></p>
                        <p className='flex items-center'>5 places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                    <section className='h-72 w-96'>
                      <section style={{backgroundImage: `url(${mughlai})`}} className='bg-cover bg-center h-full w-full text-white'>
                        <p>6 Taj View Restaurant</p>
                        <p className='flex items-center'>5 places <IoMdArrowDropright/></p>
                      </section>
                    </section>
                </section>
            </section>
        </main>
    </>
  )
}

export default Collections