import React from 'react'
import { BsInstagram , BsGithub , BsLinkedin } from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://github.com/arunkumar-0' target='_blank' rel='noreferrer'>
        <BsGithub/>
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/arun-kumar0/' target='_blank' rel='noreferrer'>
        <BsLinkedin/>
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/profile.php?id=100035460182934' target='_blank' rel='noreferrer'>
        <FaFacebookF/>
        </a>
      </div>
      {/* <div>
        <BsInstagram/>
      </div> */}
    </div>
  )
}

export default SocialMedia
