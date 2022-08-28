import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiThreeLeaves, GiMeditation, GiPeaceDove } from 'react-icons/gi'
function Features() {
  // Data
  const features = [
    { title: 'Healthy Lifestyle', icon: AiOutlineHeart },
    { title: 'Body & Mind Balance', icon: GiPeaceDove },
    { title: 'Meditation Practice', icon: GiMeditation },
    { title: 'Edeology', icon: GiThreeLeaves },
  ]
  return (
    <>
      <section className='py-24 p-4 bg-slate-50 mb-16'>
        <div className='container mx-auto max-w-6xl'>
          {/* Grid Container */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>
            {features.map((feature, idx) => {
              return (
                <div className='flex flex-col items-start space-y-8' key={idx}>
                  {/* Icon */}
                  <div className='p-6 rounded-full bg-fuchsia-200 text-fuchsia-600/50'>
                    <feature.icon size={70} />
                  </div>
                  <div className='space-y-3'>
                    {/* Heading */}
                    <h1 className='text-xl font-semibold'>{feature.title}</h1>
                    {/* Description */}
                    <p className='text-slate-400 text-sm tracking-wide'>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country
                    </p>
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

export default Features
