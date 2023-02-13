import { createContext, useEffect, useState } from 'react'

let timeoutReference;

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { }
});


export const AuthContextProvider = (props) => {
  const [token,setToken] = useState(localStorage.getItem("token"))
  console.log(localStorage.getItem("token"))
  const isLoggedIn = !!token
  
  const login = (token) => {
    setToken(token)
    localStorage.setItem("token",token)
    localStorage.setItem("expirationTime",(new Date()).getTime() + 3600000)
    timeoutReference = setTimeout(logout,36000000)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
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
    isLoggedIn,
    login,
    logout
  }


  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

export default AuthContext