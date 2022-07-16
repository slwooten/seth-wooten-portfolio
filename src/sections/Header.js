import React from 'react'

const Header = () => {
  return (
    <header>
      <navbar>
        <div className='nav-home'>
          <nav><a href='#Home'>Home</a></nav>
        </div>
        <div className='nav-projects'>
          <nav><a href='#Projects'>Projects</a></nav>
        </div>
        <div className='nav-about-me'>
          <nav><a href='#aboutMe'>About Me</a></nav>
        </div>
      </navbar>
    </header>
  )
}

export default Header;