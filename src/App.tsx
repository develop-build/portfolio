import React from 'react'
import About from './components/About'
import SCMedia from './components/SCMedia'
import Tech from './components/Tech'

const App = () => {
  return (
    <>
      <div className='bg-slate-200'>
        <About />
        <SCMedia />
        <Tech />
      </div>
    </>
  )
}

export default App
