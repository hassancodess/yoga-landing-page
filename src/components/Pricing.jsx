import React from 'react'
import { pricing } from '../data/data'
function Pricing() {
  return (
    <>
      <section className='p-4 pt-20 pb-28 mb-16 bg-slate-50'>
        <div className='max-w-6xl mx-auto container'>
          {/* Grid Container */}
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-8 gap-y-20 '>
            {pricing.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='py-10 bg-white text-center space-y-10 h-[550px]'
                >
                  <h3 className='font-medium text-sm uppercase'>
                    {item.title}
                  </h3>
                  <h1 className='text-2xl flex items-start justify-center text-fuchsia-600/60'>
                    <p className='text-semibold'>$</p>
                    <span className='text-5xl font-semibold'>{item.price}</span>
                  </h1>
                  <p className='text-slate-400 text-md'>{item.duration}</p>
                  <p className='font-semibold text-sm tracking-wide uppercase'>
                    Enjoy all the features
                  </p>

                  <div className='space-y-6'>
                    {item.features.map((feature, idx) => {
                      return (
                        <p
                          key={idx}
                          className='text-slate-500 text-md tracking-wide'
                        >
                          {feature}
                        </p>
                      )
                    })}
                  </div>
                  <div>
                    <button className=' text-white font-medium tracking-wide text-sm px-16 py-5 bg-fuchsia-400'>
                      Get Started
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
