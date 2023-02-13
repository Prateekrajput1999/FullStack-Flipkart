import React, { useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const AuthCtx = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfLgJCZn1sGM4Xaupn4hrm5gX5W9cj7BI',
    {
      email,
      password,
      returnSecureTooken:true
    })
    .then((res) => {
      AuthCtx.login(res.data.idToken)
    })
    .catch(err => {
      alert(`Login error : ${err.message}`)
    })

    setEmail('')
    setPassword('')
    navigate('/')
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfLgJCZn1sGM4Xaupn4hrm5gX5W9cj7BI',
    {
      email,
      password,
      returnSecureTooken: true
    })
    .then((res) => {
      alert("new Account Created")
    })
    .catch((err) => {
      alert(err.message)
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex flex-col items-center rounded-3xl bg-[#3270d3] h-[370px] w-[500px] ml-[500px] mt-[100px]'>
      <h1 className='mb-4 text-white mt-2'>Sign Up</h1>

      <label className='flex flex-col items-center' >
        <span className='text-white text-lg'>Your Email</span>
        <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-[320px] bg-blue-200 m-1 py-1 px-2 rounded' type='text' />
      </label>

      <label className='flex flex-col items-center mt-2'>
        <span className='text-white text-lg'>Your Password</span>
        <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-[320px] bg-blue-200 m-1 py-1 px-2 rounded' type='password' />
      </label>

      <button onClick={handleSignIn} className='bg-yellow-400 hover:bg-green-500 hover:shadow-green-700 hover:shadow-lg m-1 rounded-xl p-2 text-lg text-white mt-4 mb-2'>Create Account</button>
      <button onClick={handleLogin} className='bg-yellow-400 hover:bg-red-500 hover:shadow-red-700 hover:shadow-lg m-1 rounded-xl py-2 px-3 text-lg text-white'>Login with existing Account</button>
    </div>
  )
}

export default Auth