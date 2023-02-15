import React, { useContext, useEffect } from 'react'
import { BsCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs'
import AuthContext from './Context/AuthContext'
import cartContext from './Context/CartContext'
import axios from 'axios'

const ProductCard = (props) => {
    const AuthCtx = useContext(AuthContext)
    const CartCtx = useContext(cartContext)
    const { key, title, src, dimension, price } = props.obj
    let newTitle = title;
    let newDimension = dimension

    if (newTitle.length > 65) newTitle = newTitle.substring(0, 65)
    if (newDimension.length > 65) newDimension = newDimension.substring(0, 65)

    const handleCartClick = (e) => {
        e.preventDefault()

        if (AuthCtx.userId === null) {
            alert("login to add to cart")
            return
        }

        axios.post(`https://fkipkart-react-app-default-rtdb.firebaseio.com/userData/${AuthCtx.userId}/cartData.json`, {
            title,
            src,
            dimension,
            price,
            qty: 1
        }).then(res => {
            const data = CartCtx.cartData
            CartCtx.setCartData([...data, { title, src, dimension, price, qty: 1, id: res.data.name }])
        })
    }

    return (
        <div className='shadow-gray-400 shadow-md hover:shadow-gray-600 hover:shadow-lg border-2 rounded-3xl mx-3 my-4 w-[400px] h-[428px] '>
            <img className='w-[400px] rounded-t-3xl rounded-b-lg h-64' src={src} alt='error_image' />
            <div className='p-[5px]'>
                <p className='w-[390px] text-xl font-medium'>{newTitle}</p>
                <div className='flex justify-between'>
                    <div>
                        <p>{newDimension}</p>
                        <p className='self-end font-medium text-lg'>{price}</p>
                    </div>
                    <div className='mr-10'>
                        {props.inCart ?
                            <button className='text-green-800 text-5xl'>
                                <BsFillCartCheckFill className='cursor-default' />
                            </button>
                            :
                            <button onClick={handleCartClick} className='text-5xl '>
                                <BsCartPlusFill className='hover:text-green-600' />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard