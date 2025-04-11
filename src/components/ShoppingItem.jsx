import React from 'react'
import { add } from './State/Slice/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ShoppingItem = ({ item }) => {
  const dispatch = useDispatch()
  const { id, image, price, name } = item
  return (
    <div>
      <Link to={`/ItemDetails/${id}`} className='cursor-pointer'>
        <div className='bg-grey h-[400px] flex items-center justify-center'>
          <img src={image} alt={name} className='w-[200px]' />
        </div>
      </Link>
      <div className='mt-6 flex justify-between items-center px-4'>
        <div>
          <div className='text-sm font-bold mb-3'>{name}</div>
          <div className='text-xl font-bold'>€{price}</div>
        </div>
        <button onClick={() => dispatch(add(item))} className='bg-grey p-3 cursor-pointer'>Aggiungi al carrello</button>
      </div>
    </div>
  )
}

export default ShoppingItem