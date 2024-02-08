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
}

function SocialIcons({ icon }: SocialIconsProps) {
  return (
    <div className='flex items-center justify-center '>
      <div className='flex items-center justify-center h-10 w-10 bg-gray-800 rounded-full'>
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
      <SocialIcons icon={faLinkedin} />
      <SocialIcons icon={faGithub} />
      <SocialIcons icon={faTwitter} />
      <SocialIcons icon={faInstagram} />
    </>
  )
}

export default SCMedia
