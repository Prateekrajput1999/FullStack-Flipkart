import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Profile = () => {
    const [email, setEmail] = useState('')
    const [old, setOld] = useState('')
    const [newP, setNewp] = useState('')
    const UserCtx = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfLgJCZn1sGM4Xaupn4hrm5gX5W9cj7BI', {
            email,
            password: old,
            returnSecureTooken: false
        })
        .then(() => {
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAfLgJCZn1sGM4Xaupn4hrm5gX5W9cj7BI', {
                idToken: UserCtx.token,
                password: newP,
                returnSecureToken: false
            })
        })
        .then(() => alert("password has been updated"))
        .catch(() => alert("Could not update the password"))

        
        setOld('')
        setNewp('')
        navigate('/')
    }

    return (
        <div className='flex flex-col h-[688px]'>
            <div className='w-[500px] flex flex-col ml-[500px] mt-[40px]'>
                <h1>Change Password</h1>
                <form className='flex flex-col w-[500px] mt-1' onSubmit={handleSubmit}>
                    <input className='my-[5px] px-2 py-[7px] rounded-lg border-[2px] border-stone-400' placeholder='Email' onChange={(e) => setEmail(e.target.value)} type='text' value={email} />
                    <input className='my-[5px] px-2 py-[7px] rounded-lg border-[2px] border-stone-400' placeholder='Old password' onChange={(e) => setOld(e.target.value)} type='text' value={old} />
                    <input className='my-[5px] px-2 py-[7px] rounded-lg border-[2px] border-stone-400' placeholder='New password' onChange={(e) => setNewp(e.target.value)} type='text' value={newP} />
                    <button className='bg-green-700 rounded-xl text-lg font-normal hover:shadow-lg hover:shadow-green-500 text-slate-100 mt-[6px] h-[45px] w-[160px]' type='submit'>Change Password</button>
                </form>
            </div>
            <div className='shadow-md shadow-slate-700 border-b-[2px] border-l-[2px] border-stone-400 w-[500px] mt-10 ml-[500px]'>
                <h1 className='ml-2'>Logout</h1>
            </div>
            <button
                className='pb-[4px] w-[100px] text-xl text-slate-200 font-semibold h-[38px] ml-[500px] mt-[20px] rounded-xl bg-red-500 hover:shadow-lg hover:shadow-red-400'
                onClick={(e) => {
                    e.preventDefault()
                    UserCtx.logout()
                    navigate('/')
                }}> Logout
            </button>
        </div>
    )
}

export default Profile

