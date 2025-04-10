import React from 'react'
import { HiChevronLeft } from 'react-icons/hi'
import { open } from './State/Slice/CheckOutSlice'
import { useDispatch, useSelector } from 'react-redux'
import CheckOutItem from './CheckOutItem'

const CheckOut = () => {
  const dispatch = useDispatch()
  const { amount, total, cartItems } = useSelector((state) => state.cart)

  return (
    <div className='bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen'>
      <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div onClick={() => dispatch(open())} className="flex items-center cursor-pointer">
              <HiChevronLeft className="text-2xl" />
              <span className="uppercase text-[0.95rem] select-none">Continua a comprare</span>
            </div>
            <div>Carrello ({amount})</div>
          </div>
          <div>
            {
              cartItems.length === 0 ? (
                <div className='uppercase text-center text-3xl'>Il tuo carrello è vuoto</div>
              ) : (
                <>
                  {cartItems.map((cartItem) => {
                    return (
                      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                    )
                  })}
                  <div className="flex justify-between mt-12">
                    <div>Spesa Totale: €{total.toFixed(2)}</div>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut