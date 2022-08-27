import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'

function Navbar() {
  const [nav, setNav] = useState(false)
  const [navBackground, setNavBackground] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const handleNav = () => {
    setNav((prev) => !prev)
  }
  return (
    <>
      <nav
        className={`p-4 bg-blue-400 lg:bg-transparent fixed w-full ${
          navBackground && 'lg:bg-blue-400'
        }`}
      >
        <div className='container mx-auto max-w-6xl'>
          {/* Flex Container */}
          <div className='relative flex justify-between items-center'>
            {/* Logo */}
            <h1 className='font-light text-2xl md:text-3xl z-50'>YOGALAX.</h1>
            {/* Menu */}
            <div className='hidden lg:flex space-x-10 font-light'>
              <a href='#'>Home</a>
              <a href='#'>Classes</a>
              <a href='#'>Schedule</a>
              <a href='#'>About</a>
              <a href='#'>Blog</a>
            </div>
            {/* Hamburger Menu */}
            <div
              onClick={handleNav}
              className=' lg:hidden z-50 flex items-center space-x-1'
            >
              {nav ? <GrClose size={24} /> : <HiMenu size={26} />}{' '}
              <span className='text-md'>MENU</span>
            </div>
            {/* Mobile Menu */}
          </div>
          <div
            className={`absolute top-0 left-0 bg-blue-400  w-full h-full ${
              nav ? 'block' : 'hidden'
            }`}
          >
            <div className='flex flex-col space-y-6 p-4 mt-16 font-light'>
              <a href='#'>Home</a>
              <a href='#'>Classes</a>
              <a href='#'>Schedule</a>
              <a href='#'>About</a>
              <a href='#'>Blog</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
