import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
      <NavLink style={{ textDecoration: 'none' }} 
        className='flex items-center text-white text-xl ml-auto mr-4 cursor-pointer'
        to='cart'
       >
        <AiOutlineShoppingCart className='text-white mr-1' />
        <p className='mt-[13px]'>Cart</p>
      </NavLink>
  )
}

export default Cart