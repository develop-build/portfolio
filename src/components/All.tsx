import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'

const All = () => {
  return (
    <>
      <div className='flex justify-center bg-slate-200'>
        <div className='w-[70vw] flex flex-col items-center'>
          <Navbar />
          <Home />
          <About />
        </div>
      </div>
    </>
  )
}

export default All
