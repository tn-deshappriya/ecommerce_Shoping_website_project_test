import { Routes, Route } from 'react-router-dom'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { HomePage } from './pages/HomePage'
import './App.css'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFound } from './pages/NotFoundPage'
import { useState,useEffect } from 'react'
import axios from 'axios'


function App() {
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
      .then((response)=>{
        setCart(response.data);
      })
  },[]) 

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />}></Route>
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
