import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

interface SocialIconsProps {
  icon: any
  url: string
}

function SocialIcons({ icon }: SocialIconsProps) {
  return (
    <div className='flex items-center justify-center '>
      <div className='flex items-center justify-center h-10 w-10 bg-gray-800 rounded-full'>
        {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
        <FontAwesomeIcon
          icon={icon}
          className='text-white text-lg h-6 w-6 cursor-pointer'
        />
      </div>
    </div>
  )
}

const SCMedia: React.FC = () => {
  return (
    <>
      <div className='flex gap-x-10 justify-center'>
        <SocialIcons
          icon={faLinkedin}
          url='https://www.linkedin.com/in/dpkk1/'
        />
        <SocialIcons icon={faGithub} url='https://github.com/develop-build' />
        <SocialIcons
          icon={faTwitter}
          url='https://www.linkedin.com/in/dpkk1/'
        />
        <SocialIcons
          icon={faInstagram}
          url='https://www.instagram.com/dpkk_1/'
        />
      </div>
    </>
  )
}

export default SCMedia
