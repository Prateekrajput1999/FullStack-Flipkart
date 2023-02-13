import React from 'react'
import Navbar from './Components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Products from './Components/Products'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage'
import Auth from './Components/Auth'
import { AuthContextProvider } from './Components/Context/AuthContext';

const App = () => {
  return (
    <div className='bg-slate-200 h-screen'>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='categories/:somevalue' element={<Products />} />
            <Route path='search/:somevalue' element={<Products />} />
            <Route path='login' element={<Auth />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App