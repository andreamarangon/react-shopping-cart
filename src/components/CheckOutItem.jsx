import React from 'react'
import { HiX } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { increase, decrease, remove } from './State/Slice/CartSlice'

const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const { id, image, price, name, amount } = cartItem
  return (
    <div key={id} className='flex justify-between items-center border border-solid border-glass p-4 mb-6 rounded-2xl'>
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className='w-20 h-20 object-cover' />
        <div className="flex flex-col items-start max-w-[6.8rem]">
          <div className='text-sm font-bold mb-3'>{name}</div>
          <div className='flex items-center gap-4 mt-2'>
            <button onClick={() => dispatch(decrease(cartItem))} className='w-8 h-8 text-white bg-black hover:bg-lightBlack rounded-full cursor-pointer'>
              -
            </button>
            <div>{amount}</div>
            <button onClick={() => dispatch(increase(cartItem))} className='w-8 h-8 text-white bg-black hover:bg-lightBlack rounded-full cursor-pointer'>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <HiX onClick={() => dispatch(remove(cartItem))} className='cursor-pointer text-xl hover:text-lightBlack' />
        <div>€{(price * amount).toFixed(2)}</div>
      </div>
    </div>
  )
}

export default CheckOutItem