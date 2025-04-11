import React from 'react'
import { useParams } from 'react-router-dom'
import { add } from './State/Slice/CartSlice'
import { useDispatch } from 'react-redux'
import { items } from '../CartItems'

const ItemDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const item = items.find(item => item.id === parseInt(id))
  const { image, name, price } = item

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4'>
      <div className='lg:flex items-center justify-center'>
        <img src={image} alt={name} className='lg:w-[35rem] md:w-[30rem] w-[25rem]' />
        <div>
          <div className='text-3xl font-extrabold mb-4'>{name}</div>
          <div className='mb-4'>€{price}</div>
          <p className='max-w-[400px] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, impedit? Amet quibusdam recusandae odio tempora incidunt, vel corrupti, unde atque eaque, laboriosam magnam maiores deleniti commodi rem sequi? Laborum, dolorum.</p>
          <button onClick={() => dispatch(add(item))} className='bg-black text-white p-3'>Aggiungi al carrello</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails