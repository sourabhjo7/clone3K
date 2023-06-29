import React from 'react'

const Navbar = () => {
  return (
    <header className=' flex bg-[#9bc2c8] w-full h-20 items-center justify-center '>
    <ul className='flex'>
      <li className='' > home</li>
      <li className='pl-5' > Posts</li>
      <li className='px-5' > About</li>
      <li className='' > Contact</li>
      {/* // icon */}
    </ul>
    </header>
  )
}

export default Navbar