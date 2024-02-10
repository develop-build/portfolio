import React from 'react'
import Profile from '../images/Profile.png'
const Navbar: React.FC = () => {
  return (
    <>
      <div className=' text-white rounded-lg'>
        <nav className='bg-slate-800 font-bold flex justify-end'>
          <ul className='px-10 py-4 flex space-x-2 justify-end'>
            <li className='cursor-pointer rounded-lg py-2.5 px-8  hover:bg-white hover:text-black active:text-white active:bg-gray-600 '>
              Home
            </li>
            <li className='cursor-pointer rounded-lg py-2.5 px-8 hover:bg-white hover:text-black active:text-white active:bg-gray-600'>
              About
            </li>
            <li className='cursor-pointer rounded-lg py-2.5 px-8  hover:bg-white hover:text-black active:text-white active:bg-gray-600'>
              Services
            </li>
            <li className='cursor-pointer rounded-lg py-2.5 px-8  hover:bg-white hover:text-black active:text-white active:bg-gray-600'>
              Portfolio
            </li>
            <li className='cursor-pointer rounded-lg py-2.5 px-8  hover:bg-white hover:text-black active:text-white active:bg-gray-600'>
              Contact Now
            </li>
          </ul>
        </nav>
        <div className='grid grid-cols-3 gap-10 p-10 '>
          <div className='col-span-2 bg-white bg-opacity-80  py-20 '>1</div>
          <div className='item2 bg-white bg-opacity-80 text-center py-20 '>
            <img height='200' width='200' src={Profile} alt='ProfileImage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
