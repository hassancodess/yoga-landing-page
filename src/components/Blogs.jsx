import React from 'react'
import { blogs } from '../data/data'
function Blogs() {
  return (
    <>
      <section className='p-4 pt-20 pb-28 mb-16 bg-white'>
        <div className='max-w-6xl mx-auto container'>
          {/* Content */}
          <div className='pb-16 space-y-6 text-center'>
            <h1 className='text-slate-300 text-md uppercase  tracking-widest'>
              Blog
            </h1>
            <h1 className='text-6xl font-light'>Recent Posts</h1>
            {/* Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-8 gap-y-20 '>
              {blogs.map((blog, idx) => {
                return (
                  <div key={idx} className='space-y-8 '>
                    {/* Img */}{' '}
                    <img
                      src={blog.img}
                      alt='img'
                      className='w-full h-2/5 object-cover'
                    />
                    <div className='p-4 space-y-8'>
                      {/* Date */}
                      <div className='flex space-x-6 items-center font-light'>
                        <p className='text-5xl text-fuchsia-400'>
                          {blog.date.getDate()}
                        </p>
                        <div className='flex flex-col space-y-3 text-slate-400'>
                          <p className='text-left'>{blog.date.getFullYear()}</p>
                          <p>
                            {blog.date.toLocaleString('default', {
                              month: 'long',
                            })}
                          </p>
                        </div>
                      </div>
                      <p className='text-start'>{blog.title}</p>
                      <p className='text-start text-slate-400'>{blog.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
