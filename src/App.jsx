// import Hero from './components/Hero'

import Classes from './components/Classes'
import Features from './components/Features'
import Header from './components/Header'
import Pricing from './components/Pricing'
import WhyYoga from './components/WhyYoga'

function App() {
  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <WhyYoga />
        <Features />
        <Classes />
        <Pricing />
      </div>
    </>
  )
}

export default App
