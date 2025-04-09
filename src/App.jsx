import React from 'react'
import Navbar from './components/Navbar'
import ShoppingContainer from './components/ShoppingContainer'
import CheckOut from './components/CheckOut'
import { useSelector } from 'react-redux'

const App = () => {
  const { isOpen } = useSelector((state) => state.checkout)
  return (
    <div className='font-BeVietnamPro'>
      <Navbar />
      <ShoppingContainer />
      {isOpen && <CheckOut />}
    </div>
  )
}

export default App
