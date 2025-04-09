import React from 'react'

const ShoppingItem = ({ item }) => {
  const { id, image, price, name } = item
  return (
    <div>
      <div className='bg-grey h-[400px] flex items-center justify-center'>
        <img src={image} alt={name} className='w-[200px]' />
      </div>
      <div className='mt-6 flex justify-between items-center px-4'>
        <div>
          <div className='text-sm font-bold mb-3'>{name}</div>
          <div className='text-xl font-bold'>€{price}</div>
        </div>
        <button className='bg-grey p-3'>Aggiungi Al Carrello</button>
      </div>
    </div>
  )
}

export default ShoppingItem