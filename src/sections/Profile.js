import React from 'react'

import mePic from './images/mePic.png'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-pic'>
        <img id='Home' src={mePic} alt='profile-bitmoji'></img>
      </div>
      <div className='name-wrapper'>
        <div className='name-text'>Seth Wooten</div>
        <div className='job-text'>Web Developer</div>
      </div>
      <div className='links'>
        <h2><a href='https://github.com/slwooten' target='new'>GitHub &gt;</a></h2>
        <h2><a href='https://www.linkedin.com/in/sl-wooten/' target='new'>LinkedIn &gt;</a></h2>
        <h2><a href='https://drive.google.com/file/d/1Ce9rh1gtS0JNxNdPpsxraPfi5IVsf-Y7/view?usp=sharing"' target='new'>Resume &gt;</a></h2>
        <h2><a href='mailto:slwooten14@gmail.com"' target='new'>Email &gt;</a></h2>
      </div>
    </div>
  )
}

export default Profile;