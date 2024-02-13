import React from 'react'
import Profile from '../images/Profile.png'
import { useState, useEffect } from 'react'

const Home: React.FC = () => {
  const greeting = ['Hello', 'Namaste', 'Hallo', 'Bonjour', 'Hola']
  const [index, setIndex] = useState(0)
  // useEffect(() => {
  // const interval = setInterval(() => {

  //   setIndex((prevIndex) => (prevIndex + 1) % greeting.length);
  // }, 2000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greeting.length)
    }, 2000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-40 	h-[70vh]'>
        <div className='md:col-span-2 p-6 rounded-lg ml-40'>
          <h2 className='text-3xl font-bold'>{greeting[index]}! </h2>
          <h2 className='text-3xl font-bold mb-4'>I'am Deepak Kumar</h2>
          <p className='text-gray-700 text-xl mb-2'>
            A passionate Software Engineer
          </p>
          <p className='text-gray-700 text-xl'>& Fullstack developer</p>
          <a
            href='/path/to/your/resume.pdf'
            download='resume.pdf'
            className='hover:bg-gray-600 hover:text-white active:text-white active:bg-slate-800 text-white bg-slate-800 font-bold py-2 px-4 rounded-full inline-block mt-4'
          >
            Download Resume
          </a>
        </div>
        <div className='md:col-span-1 flex justify-center '>
          <img
            className='w-1/8 bg-slate-900 rounded-full p-2 h-80'
            src={Profile}
            alt='Profile Pic'
          />
        </div>
      </div>
    </>
  )
}

export default Home
