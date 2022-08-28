import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
function Header() {
  return (
    <section className='bg-gradient-to-r from-blue-300  to-purple-600 mb-16 '>
      <Navbar />
      <Hero />
    </section>
  )
}

export default Header
