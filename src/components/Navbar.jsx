import React, { useEffect, useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  return (
    <div className={`${scroll ? 'bg-grey shadow-lg' : ''} fixed top-0 left-0 w-full z-20`}>
      <div className='flex items-center justify-between relative container py-4 mx-auto'>
        <h1 className='text-xl font-bold'>MyShop</h1>
        <div className='relative cursor-pointer'>
          <BiShoppingBag className='text-3xl opacity-80' />
          <span className='absolute bottom-[-3px] right-[-3px] rounded-full w-4 h-4 flex items-center justify-center text-[10px] bg-black text-white z-10'>
            0
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar