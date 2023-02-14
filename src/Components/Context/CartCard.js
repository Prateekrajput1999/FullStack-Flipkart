import React, {useContext} from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai"
import cartContext from './CartContext'


const CartCard = (props) => {
    const CartCtx = useContext(cartContext)
    const handleRemoveCart = (e) => {
        e.preventDefault()
        CartCtx.removeFromCart(props.id)
    }

    return (
        <div className='flex rounded-xl mb-6 shadow-2xl p-2 shadow-emerald-400'>
            <img className='w-[250px] h-[209px]' src={props.src} alt="pic" />
            <div className='ml-5'>
                <p>{props.title}</p>
                <p>{props.dimension}</p>
                <p>{props.price}</p>
                <div className='flex content-center'>
                    <button onClick={handleRemoveCart} className='px-[10px] h-[50px] mt-[25px] text-lg text-white bg-red-600 rounded-3xl hover:shadow-lg hover:shadow-red-500'>Remove</button>
                    <AiOutlinePlusSquare className='text-3xl mt-[36px] ml-5 cursor-pointer' />
                    <p className='text-xl rounded-full px-2 mt-[34px] ml-2 border-[2px] border-black'>{props.qty}</p>
                    <AiOutlineMinusSquare className='text-3xl ml-2 mt-[36px] cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default CartCard