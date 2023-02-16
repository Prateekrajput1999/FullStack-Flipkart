import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import CartCard from './CartCard'

const CartDetails = () => {
  const UserCtx = useContext(UserContext)

  return (
    <div>
      <div className='bg-slate-100 p-1 text-5xl shadow-lg shadow-[#4974b9]'>
        <p className='ml-[700px] shadow-xl shadow-[#4974b9] bg-slate-50 pl-6 py-1 rounded-xl w-[140px] text-[#587fbc] mt-2 font-serif'>Cart</p>
      </div>
      <div>
        {UserCtx.userId ?
          ((UserCtx.cartData).length === 0 ?
            <h1 className='mt-10 ml-[650px]'>Empty Cart</h1>
            :
            UserCtx.cartData.map(productData => {
              return (
                <CartCard
                  title={productData.title}
                  dimension={productData.dimension}
                  src={productData.src}
                  price={productData.price}
                  id={productData.id}
                  qty={productData.qty}
                />
              )
            }))
          :
          <div className='h-screen'>
            <h1 className='ml-[570px] bg-slate-300 text-green-700 rounded-3xl pl-6 shadow-2xl shadow-red-400 py-2  mt-[200px] w-[450px]'>Login to see cart data</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default CartDetails