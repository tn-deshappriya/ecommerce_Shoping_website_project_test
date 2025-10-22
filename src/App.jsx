import { Routes, Route } from 'react-router-dom'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { HomePage } from './pages/HomePage'
import './App.css'
import { OrdersPage } from './pages/OrdersPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage />} />
    </Routes>
  )
}

export default App
