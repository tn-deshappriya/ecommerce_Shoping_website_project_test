import { Routes, Route } from 'react-router-dom'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { HomePage } from './pages/Home/HomePage'
import './App.css'
import { OrdersPage } from './pages/Order/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFound } from './pages/NotFoundPage'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} loadCart={loadCart} />}></Route>
      <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart} />} />
      <Route path='*' element={<NotFound cart={cart} />} />
    </Routes>
  )
}

export default App
