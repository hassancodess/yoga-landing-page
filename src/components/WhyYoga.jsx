import React from 'react'
import Yoga from '../assets/yoga.jpg'
import { AiFillCheckCircle } from 'react-icons/ai'
function WhyYoga() {
  return (
    <>
      <section className='p-4 pb-16 '>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid grid-cols-2 gap-6'>
            <div></div>
            <div className='flex flex-col  space-y-10 items-start'>
              {/* Heading & Description */}
              <div className='max-w-lg font-light space-y-6'>
                <h1 className='text-6xl leading-tight'>
                  Why You Should Go To Yoga
                </h1>
                <p className='text-slate-400'>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
              {/* Features */}
              <div className=' max-w-lg font-light space-y-6'>
                {/* Feature 1 */}
                <div className='text-fuchsia-400 space-x-4 flex items-center'>
                  <AiFillCheckCircle size={25} />
                  <p className='text-xl tracking-wide tracking-wide'>
                    Yoga boosts brain power
                  </p>
                </div>
                {/* Feature 1 */}
                <div className='text-fuchsia-400 space-x-4 flex items-center'>
                  <AiFillCheckCircle size={25} />
                  <p className='text-xl tracking-wide'>
                    Yoga improves your strength
                  </p>
                </div>
                {/* Feature 1 */}
                <div className='text-fuchsia-400 space-x-4 flex items-center'>
                  <AiFillCheckCircle size={25} />
                  <p className='text-xl tracking-wide'>
                    Yoga helps you to breathe better
                  </p>
                </div>
                {/* Feature 1 */}
                <div className='text-fuchsia-400 space-x-4 flex items-center'>
                  <AiFillCheckCircle size={25} />
                  <p className='text-xl tracking-wide'>
                    Yoga helps you to focus
                  </p>
                </div>
                {/* Feature 1 */}
                <div className='text-fuchsia-400 space-x-4 flex items-center'>
                  <AiFillCheckCircle size={25} />
                  <p className='text-xl tracking-wide'>
                    Yoga helps give meaning to your day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyYoga
