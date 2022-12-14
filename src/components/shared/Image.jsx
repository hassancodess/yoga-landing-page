import React from 'react'

function Image({ img, title, desc }) {
  return (
    <>
      <div className='h-96 overflow-hidden group '>
        {/* Overlay */}
        <div className='h-96 w-full  bg-fuchsia-300 bg-opacity-25  flex-col justify-center space-y-4 text-center hidden group-hover:flex group-hover:duration-1000  '>
          <h3 className='font-medium text-2xl'>{title}</h3>
          <p>{desc}</p>
        </div>
        <img src={img} alt='yoga' className='object-none object-center' />
      </div>
    </>
  )
}

export default Image
