import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import cartContext from './Context/CartContext';
import { Product_data } from './db';
import ProductCard from './ProductCard';
import { searchFunction } from './SearchFunction';


const Products = () => {
  const params = useParams();
  const CartCtx = useContext(cartContext)
  const curUrl = window.location.pathname
  let products = (curUrl[1] === 'c') ? Product_data[params.somevalue] : searchFunction(params.somevalue);


  const isInCart = (title, src, dimension, price) => {
    const data = CartCtx.cartData
    for (let obj of data) {
      console.log(obj)
      if ((obj.title === title) && (obj.src === src) && (obj.dimension === dimension) && (obj.price === price)) {
        return true
      }
    }
    return false
  }


  return (
    <div>
      <div className='flex justify-center w-[500px] ml-[550px] mt-[5px] rounded-2xl bg-cyan-500 shadow-2xl shadow-cyan-500/50 p-[8px] h-[50px] border-b-[1px]'>
        <p className='font-normal mt-[4px] mr-1 text-lg'>Showing results for</p>
        <p className='font-medium text-2xl'>{"\'" + params.somevalue + "\'"} </p>
      </div>
      <div className='flex flex-wrap ml-[130px]'>
        {

          products.length === 0 ? <h1 className='shadow-2xl bg-slate-300 shadow-red-600 border-2 border-black p-4 text-6xl mt-[200px] ml-[410px]'>Nothing to show</h1> :
            products.map(obj => <ProductCard obj={obj} inCart={isInCart(obj.title, obj.src, obj.dimension, obj.price)} />)
        }
      </div>
    </div>
  )
}

export default Products