import React from 'react'
import { add } from './State/Slice/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ShoppingItem = ({ item }) => {
  const dispatch = useDispatch()
  const { id, image, price, name } = item
  return (
    <div className='bg-white rounded-2xl overflow-hidden'>
      <Link to={`/ItemDetails/${id}`} className='cursor-pointer'>
        <div className='h-[300px] flex items-center justify-center'>
          <img src={image} alt={name} className='w-[300px] hover:scale-110 duration-300 ease-in' />
        </div>
      </Link>
      <div className='mt-2 flex flex-col justify-between items-center pb-4 gap-4'>
        <div className='text-sm font-bold'>{name}</div>
        <div className='text-xl font-bold'>€{price}</div>
        <button onClick={() => dispatch(add(item))} className='bg-cerulean hover:opacity-85 rounded-full text-white font-semibold py-3 px-9 cursor-pointer text-sm'>Aggiungi al carrello</button>
      </div>
    </div>
  )
}

export default ShoppingItem