import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ShoppingContainer from './components/ShoppingContainer'
import CheckOut from './components/CheckOut'
import { useDispatch, useSelector } from 'react-redux'
import { total } from './components/State/Slice/CartSlice'

const App = () => {
  const { isOpen } = useSelector((state) => state.checkout)
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(total())
  }, [cartItems])

  return (
    <div className='font-BeVietnamPro'>
      <Navbar />
      <ShoppingContainer />
      {isOpen && <CheckOut />}
    </div>
  )
}

export default App
