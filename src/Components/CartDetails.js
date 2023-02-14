import React, { useContext } from 'react'
import CartCard from './Context/CartCard'
import cartContext from './Context/CartContext'

const CartDetails = () => {
  const CartCtx = useContext(cartContext)


  return (
    <div>
      <div className='bg-slate-100 p-1 text-5xl shadow-lg shadow-[#4974b9]'>
        <p className='ml-[700px] shadow-xl shadow-[#4974b9] bg-slate-50 pl-6 py-1 rounded-xl w-[140px] text-[#587fbc] mt-2 font-serif'>Cart</p>
      </div>
      <div>
        {
          CartCtx.cartData.map(productData => {
            return (
              <CartCard
                title={productData.title}
                dimension={productData.dimension}
                src={productData.src}
                price={productData.price}
                id={productData.key}
                qty={productData.qty}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default CartDetails