import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ShoppingContainer from './components/ShoppingContainer'
import CheckOut from './components/CheckOut'
import { useDispatch, useSelector } from 'react-redux'
import { total } from './components/State/Slice/CartSlice'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ItemDetails from './components/ItemDetails'
const Layout = () => {
  const { isOpen } = useSelector((state) => state.checkout)

  return (
    <div>
      <Navbar />
      {isOpen && <CheckOut />}
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ShoppingContainer />
      },
      {
        path: '/itemDetails/:id',
        element: <ItemDetails />
      }
    ]
  }
])
const App = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(total())
  }, [cartItems])

  return (
    <div className='font-BeVietnamPro bg-grey'>
      <RouterProvider router={router}><Layout /></RouterProvider>
    </div>
  )
}

export default App
