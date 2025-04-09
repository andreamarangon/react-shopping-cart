import React from 'react'
import { HiChevronLeft } from 'react-icons/hi'
import { open } from './State/Slice/CheckOutSlice'
import { useDispatch } from 'react-redux'

const CheckOut = () => {
  const dispatch = useDispatch()
  return (
    <div className='bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen'>
      <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div onClick={() => dispatch(open())} className="flex items-center cursor-pointer">
              <HiChevronLeft className="text-2xl" />
              <span className="uppercase text-[0.95rem] select-none">Continua a comprare</span>
            </div>
            <div>Carrello (0)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut