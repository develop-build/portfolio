import React from 'react'
import Node from '../images/Nodejs.png'
import Mongo from '../images/MongoDB.png'

const Tech: React.FC = () => {
  return (
    <div className='flex flex-col  items-center '>
      <div className='text-center font-bold text-2xl m-2'>
        Passion for &nbsp;
        <span className='bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text'>
          Node.js &nbsp;
        </span>
        & &nbsp;
        <span className='bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text'>
          MongoDB
        </span>
      </div>
      <p className='text-gray-600 w-6/12 text-center '>
        Backend development is my playground, and Node.js coupled with MongoDB
        is my forte. With a &nbsp;
        <span className='bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text'>
          commitment to excellence
        </span>
        , I translate ideas into seamless, high-performance applications,
        delivering unparalleled value to clients and users alike.
      </p>
      <div className='flex gap-x-12 m-6'>
        <img height='150' width='160' src={Mongo} alt='MongoDB' />
        <img height='150' width='160' src={Node} alt='Nodejs' />
      </div>
    </div>
  )
}

export default Tech
