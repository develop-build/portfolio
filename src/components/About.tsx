import React from 'react'

const About: React.FC = () => {
  return (
    <div className='flex flex-col  items-center'>
      <div className='text-center font-bold text-3xl'>About Me!</div>
      <p className=' text-gray-600 w-5/12  '>
        Greetings I'm Deepak Kumar, a seasoned developer with over 1.5 years of
        expertise in
        <span className='font-bold'> Node.js and MongoDB development. </span>
        Passionate about crafting efficient and innovative backend solutions.
        Apart from this I value building strong professional relationships—let's
        connect and explore possibilities. Reach out via email or social media
        to initiate a conversation about your goals and how we can achieve them
        together.
      </p>
    </div>
  )
}

export default About
