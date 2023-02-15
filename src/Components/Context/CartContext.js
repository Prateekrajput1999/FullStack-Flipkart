import { createContext, useEffect, useState, useContext } from 'react'
import AuthContext from './AuthContext';
import axios from 'axios';

const cartContext = createContext({
    cartData: [],
    setCartData: (cartData) => {}
});


export const CartContextProvider = (props) => {
    const AuthCtx = useContext(AuthContext)
    const [cartData, setCartData] = useState([])

    const contextValue = {
        cartData,
        setCartData
    }

    
    return <cartContext.Provider value={contextValue}>{props.children}</cartContext.Provider>
}

export default cartContext