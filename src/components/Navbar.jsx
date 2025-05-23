import React, { useEffect, useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { open } from './State/Slice/CheckOutSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()
  const { amount } = useSelector((state) => state.cart)
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  return (
    <div className={`${scroll ? 'bg-white shadow-lg' : ''} fixed top-0 left-0 w-full z-20`}>
      <div className='flex items-center justify-between relative container py-4 px-2 mx-auto'>
        <Link to='/'>
          <div className='text-xl font-bold hover:text-lightBlack'>MyShop</div>
        </Link>
        <div onClick={() => dispatch(open())} className='relative cursor-pointer'>
          <BiShoppingBag className='text-3xl opacity-80' />
          <div className='absolute bottom-[-3px] right-[-3px] rounded-full w-4 h-4 flex items-center justify-center text-[10px] bg-black text-white z-10'>
            {amount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar