'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className='fixed flex flex-col gap-2 items-center justify-center top-10 right-10 z-10 bg-[#262626] rounded-full w-[40px] h-[40px] hover:w-[43px] hover:h-[43px] transition-all duration-300' onClick={handleOpen}>
        <span className='block w-1/2 h-[1px] bg-white'></span>
        <span className='block w-1/2 h-[1px] bg-white'></span>
      </button>
      <div className={`fixed bg-white h-screen w-[375px] pt-[100px] px-[20px] z-10 transition-transform duration-300 transform right-0 top-0 ${isOpen ? 'translate-x-0 ' : 'translate-x-[100%]'}`}>
        <div className='absolute top-10 right-10'>
          <button className='relative top-0 right-0 bg-[#262626] rounded-full text-white text-4xl flex items-center justify-center leading-[36px] z-10 w-[40px] h-[40px] hover:w-[43px] hover:h-[43px] transition-all duration-300' onClick={handleOpen}>
            <span className='block w-1/2 h-[1px] bg-white rotate-45 absolute'></span>
            <span className='block w-1/2 h-[1px] bg-white -rotate-45 absolute'></span>
          </button>
        </div>
        <ul className='flex flex-col gap-10'>
          <li>
            <Link href='/'>TOP</Link>
          </li>
          <li>
            <Link href='/'>CONCEPT</Link>
          </li>
          <li>
            <Link href='/'>HAIR CATALOG</Link>
          </li>
          <li>
            <Link href='/'>SALON</Link>
          </li>
          <li>
            <Link href='/'>STAFF</Link>
          </li>
          <li>
            <Link href='/'>RECRUIT</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavMenu