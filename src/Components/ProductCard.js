import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs'

const ProductCard = (props) => {
    const { key, title, src, dimension, price } = props.obj
    let newTitle = title;
    let newDimention = dimension

    if(newTitle.length > 65) newTitle = newTitle.substring(0,65)
    if(newDimention.length > 65) newDimention = newDimention.substring(0,65)

    return (
        <div className='shadow-gray-400 shadow-md hover:shadow-gray-600 hover:shadow-lg border-2 rounded-3xl mx-3 my-4 w-[400px] h-[428px] '>
            <img className='w-[400px] rounded-t-3xl rounded-b-lg h-64' src={src} alt='error_image' />
            <div className='p-[5px]'>
                <p className='w-[390px] text-xl font-medium'>{newTitle}</p>
                <div className='flex justify-between'>
                    <div>
                        <p>{newDimention}</p>
                        <p className='self-end font-medium text-lg'>{price}</p>
                    </div>
                    <button className='text-5xl mr-10'><BsCartPlusFill /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard