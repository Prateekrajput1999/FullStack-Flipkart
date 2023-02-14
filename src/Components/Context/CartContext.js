import { createContext, useEffect, useState } from 'react'

const cartContext = createContext({
    cartData: [],
    addToCart: (productData) => { },
    removeFromCart: (id) => { }
});


export const CartContextProvider = (props) => {
    
    const [cartData, setCartData] = useState([])

    const addToCart = (productData) => {
        setCartData((cartData) => [...cartData, productData])
    }

    const removeFromCart = (key) => {
        setCartData((cartData) => cartData.filter(obj => obj.key !== key))
    }

    const contextValue = {
        cartData,
        addToCart,
        removeFromCart
    }

    return <cartContext.Provider value={contextValue}>{props.children}</cartContext.Provider>
}

export default cartContext