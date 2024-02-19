import React from 'react'
import SCMedia from './SCMedia'
import Tech from './Tech'
const About: React.FC = () => {
  return (
    <div>
      <div className='flex flex-col  items-center '>
        <div className='text-center font-bold text-3xl  mb-2'>About Me!</div>
        <p className=' text-gray-600 w-6/12 mb-4 '>
          Greetings I'm Deepak Kumar, a seasoned developer with over 1.5 years
          of expertise in &nbsp;
          <span className='font-bold'>
            Node.js and MongoDB development. &nbsp;
          </span>
          Passionate about crafting efficient and innovative backend solutions.
          Apart from this I value building strong professional
          relationships—let's connect and explore possibilities. Reach out via
          email or social media to initiate a conversation about your goals and
          how we can achieve them together.
        </p>
      </div>
      <SCMedia />
      <Tech />
    </div>
  )
}

export default About
