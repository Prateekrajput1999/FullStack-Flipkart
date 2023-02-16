import { createContext, useEffect, useState } from 'react'
import FetchCartData from '../Cart/FetchCartData';

let timeoutReference;

const UserContext = createContext({
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  cartData: [],
  setCartData: (res) => { },
  login: (token) => { },
  logout: () => { }
});


export const UserContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userId, setUserId] = useState(localStorage.getItem("userId"))
  const [cartData, setCartData] = useState([])  

  const login = (token, userId) => {
    setToken(token)
    setUserId(userId)
    localStorage.setItem("token", token)
    localStorage.setItem("userId", userId)
    localStorage.setItem("expirationTime", (new Date()).getTime() + 3600000)
    timeoutReference = setTimeout(logout, 36000000)
  }

  const logout = () => {
    setToken(null)
    setUserId(null)
    setCartData([])
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("expirationTime")

    if (timeoutReference) {
      clearTimeout(timeoutReference)
    }
  }

  useEffect(() => {
    FetchCartData(userId).then(res => setCartData(res))
  },[userId])


  useEffect(() => {
    timeoutReference = setTimeout(logout, localStorage.getItem("expirationTime") - (new Date()).getTime())
  }, [])

  const contextValue = {
    token,
    userId,
    cartData,
    setCartData,
    login,
    logout
  }

  return <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>

}

export default UserContext