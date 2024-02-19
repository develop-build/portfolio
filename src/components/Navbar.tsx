import React from 'react'
const Navbar: React.FC = () => {
  return (
    <>
      <div className=' text-white rounded-lg fixed '>
        <nav className='bg-slate-800 font-bold flex justify-end'>
          <ul className='px-10 py-2 flex space-x-2 justify-end w-[100vw]'>
            <li className='cursor-pointer rounded-lg py-2.5 px-6 hover:bg-white hover:text-black active:text-white active:bg-gray-600 '>
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
      </div>
    </>
  )
}

export default Navbar
