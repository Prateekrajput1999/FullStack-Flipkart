import React, { useContext, useEffect } from 'react'
import AuthContext from './Context/AuthContext'
import CartCard from './Context/CartCard'
import cartContext from './Context/CartContext'
import axios from 'axios'

const CartDetails = () => {
  const CartCtx = useContext(cartContext)
  const AuthCtx = useContext(AuthContext)

  useEffect(() => {
    if (AuthCtx.userId) {
      axios.get(`https://fkipkart-react-app-default-rtdb.firebaseio.com/userData/${AuthCtx.userId}.json`)
        .then(res => {
          const cartObj = res?.data?.cartData
          let newCartData = [];
          for (const key in cartObj) {
            newCartData.push({
              title: cartObj[key].title,
              src: cartObj[key].src,
              dimension: cartObj[key].dimension,
              price: cartObj[key].price,
              qty: cartObj[key].qty,
              id: key
            })
          }
          CartCtx.setCartData(newCartData)
        })
        .catch(err => alert(`Can't fetch Cart Data : ${err.message}`))
    }
  }, [])


  return (
    <div>
      <div className='bg-slate-100 p-1 text-5xl shadow-lg shadow-[#4974b9]'>
        <p className='ml-[700px] shadow-xl shadow-[#4974b9] bg-slate-50 pl-6 py-1 rounded-xl w-[140px] text-[#587fbc] mt-2 font-serif'>Cart</p>
      </div>
      <div>
        {AuthCtx.userId ?
          CartCtx.cartData.map(productData => {
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
          })
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