import React, {useContext} from 'react'
import Cart from '../Cart/Cart'
import SearchBar from './SearchBar'
import { NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../Context/UserContext'


const Navbar = () => {
  const navigate = useNavigate()
  const UserCtx = useContext(UserContext)


  const handleClick = (e) => {
    e.preventDefault()
    if(UserCtx.token) {
      navigate('/')
      UserCtx.logout()
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
        {UserCtx.token ? "Logout" : "Login"}
      </button>
      <Cart />
    </div>
  )
}

export default Navbar