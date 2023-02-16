import React, { useContext } from 'react'
import Cart from '../Cart/Cart'
import SearchBar from './SearchBar'
import { NavLink} from 'react-router-dom'
import UserContext from '../Context/UserContext'


const Navbar = () => {
  const UserCtx = useContext(UserContext)


  return (
    <div className='bg-[#2874f0] h-14 flex items-center'>
      <NavLink style={{ textDecoration: 'none' }} to='/'>
        <img src='/flipkart-icon.png' className='w-[101px] ml-44 mt-[1px]' alt='icon' />
      </NavLink>
      <SearchBar />
      {UserCtx.token ?
        <NavLink to='profile'>
          <button className='border-black rounded-full bg-white text-[#2874f0] text-lg w-[99px] py-[1px] mt-[3px] ml-[510px]'>
            Profile
          </button>
        </NavLink>
        :
        <NavLink style={{ textDecoration: 'none' }} to='login'>
          <button className='border-black bg-white text-[#2874f0] text-lg w-[99px] py-[1px] ml-16'>
            Login
          </button>
        </NavLink>
      }
      <Cart />
    </div>
  )
}

export default Navbar