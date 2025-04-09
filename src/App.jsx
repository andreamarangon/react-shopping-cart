import React from 'react'
import Navbar from './components/Navbar'
import ShoppingContainer from './components/ShoppingContainer'
import CheckOut from './components/CheckOut'

const App = () => {
  return (
    <div className='font-BeVietnamPro'>
      <Navbar />
      <ShoppingContainer />
      <CheckOut />
    </div>
  )
}

export default App
