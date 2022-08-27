import React from 'react'
import Image from './shared/Image'
import { imgData } from '../data/data'
function Classes() {
  return (
    <>
      <section className='p-4 bg-white py-32'>
        <div className='container mx-auto max-w-6xl'>
          {/* Content */}
          <div className='font-light text-center mb-10'>
            <p className='uppercase  text-slate-400'>Yoga Classes</p>
            <h1 className='text-5xl'>Choose your Level & Focus</h1>
          </div>
          {/* Images Grid  */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {imgData.map((item, idx) => {
              return (
                <Image
                  key={idx}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Classes
