import { Routes, Route } from 'react-router-dom'
import { CheckoutPage } from './pages/CheckoutPage'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
