import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoriesData } from '../db'


const Categories = () => {
    return (
        <div className='flex justify-evenly bg-white pb-2 shadow-sm'>
            {
                CategoriesData.map(obj => {
                    return (
                        <NavLink style={{ textDecoration: 'none' }} to={'categories/' + obj.text}>
                            <div className='flex flex-col items-center cursor-pointer'>
                                <img className='w-20' src={obj.url} alt={obj.text} />
                                <p className='font-semibold text-base text-black'>{obj.text}</p>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Categories