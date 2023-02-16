import React, { useContext, useRef } from 'react'
import Navbar from './Components/NavBar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Products from './Components/Products/Products'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage'
import Auth from './Components/Auth/Auth'
import UserContext, { UserContextProvider } from './Components/Context/UserContext';
import CartDetails from './Components/Cart/CartDetails';

const App = () => {
  const UserCtx = useRef(useContext(UserContext))

  return (
    <div className='bg-slate-200'>
      <UserContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='categories/:somevalue' element={<Products />} />
            <Route path='search/:somevalue' element={<Products />} />
            <Route path='login' element={<Auth />} />
            <Route path='cart' element={<CartDetails />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}

export default App