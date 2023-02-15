import { createContext, useEffect, useState, useContext } from 'react'
import cartContext from './CartContext';

let timeoutReference;

const AuthContext = createContext({
  token: null,
  userId: null,
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { }
});


export const AuthContextProvider = (props) => {
  const [token,setToken] = useState(localStorage.getItem("token"))
  const [userId,setUserId] = useState(localStorage.getItem("userId"))
  const CartCtx = useContext(cartContext)
  const isLoggedIn = !!token
  
  const login = (token,userId) => {
    setToken(token)
    setUserId(userId)
    localStorage.setItem("token",token)
    localStorage.setItem("userId",userId)
    localStorage.setItem("expirationTime",(new Date()).getTime() + 3600000)
    timeoutReference = setTimeout(logout,36000000)
  }

  const logout = () => {
    setToken(null)
    setUserId(null)
    CartCtx.setCartData([])
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("expirationTime")
    
    if(timeoutReference) {
      clearTimeout(timeoutReference)
    }
  }
  
  useEffect(() => {
    timeoutReference = setTimeout(logout,localStorage.getItem("expirationTime") - (new Date()).getTime())
  },[])

  const contextValue = {
    token,
    userId,
    isLoggedIn,
    login,
    logout
  }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

export default AuthContext