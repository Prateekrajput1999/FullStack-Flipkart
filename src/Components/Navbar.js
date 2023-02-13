import React, {useContext} from 'react'
import Cart from './Cart'
import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AuthContext from './Context/AuthContext'


const Navbar = () => {
  const navigate = useNavigate()
  const AuthCtx = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    if(AuthCtx.isLoggedIn) {
      navigate('/')
      AuthCtx.logout()
    }
    else {
      navigate('login')
    }

  }
  return (
    <div className='bg-[#2874f0] h-14 flex items-center'>
      <NavLink style={{ textDecoration: 'none' }} to = '/'>
        <img src='/flipkart-icon.png' className='w-[101px] ml-44 mt-[1px]' alt='icon' />
      </NavLink>
      <SearchBar />
      <button onClick={handleClick} className='border-black bg-white text-[#2874f0] text-lg w-[99px] py-[1px] ml-16'>
        {AuthCtx.isLoggedIn ? "Logout" : "Login"}
      </button>
      <Cart />
    </div>
  )
}

export default Navbar