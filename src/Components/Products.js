import React from 'react'
import { useParams } from 'react-router-dom'
import { Product_data } from './db';
import ProductCard from './ProductCard';
import { searchFunction } from './SearchFunction';


const Products = () => {
  const params = useParams();
  const curUrl = window.location.pathname
  let products = (curUrl[1] === 'c') ? Product_data[params.somevalue] : searchFunction(params.somevalue);

  return (
    <div>
      <div className='flex justify-center w-[500px] ml-[550px] mt-[5px] rounded-2xl bg-cyan-500 shadow-2xl shadow-cyan-500/50 p-[8px] h-[50px] border-b-[1px]'>
        <p className='font-normal mt-[4px] mr-1 text-lg'>Showing results for</p>
        <p className='font-medium text-2xl'>{"\'" + params.somevalue + "\'"} </p>
      </div>
      <div className='flex flex-wrap ml-[130px]'>
        {
          products.length === 0 ? <h1 className='shadow-2xl bg-slate-300 shadow-red-600 border-2 border-black p-4 text-6xl mt-[200px] ml-[410px]'>Nothing to show</h1> :
          products.map(obj => <ProductCard obj={obj} />)
        }
      </div>
    </div>
  )
}

export default Products