import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Suggestions = ({ prodArr }) => {
    return (
        <div className='bg-white mx-2 mt-2'>
            <div className='border-t-[2px] border-b-[1px] border-slate-300'>
                <h3 className='ml-1 p-1'>{prodArr[0].text}</h3>
            </div>
            <Carousel className='h-[300px]' responsive={responsive}>
                {
                    prodArr.map((obj, indx) => {
                        if (indx === 0) return;
                        return (
                            <NavLink style={{ textDecoration: 'none' }}  to = {obj.href}>
                                <div className='flex flex-col justify-center items-center h-[270px] w-72 cursor-pointer'>
                                    <img className="w-40 h-40" src={obj.src} alt={obj.para1} />
                                    <p className='text-lg text-black font-medium'>{obj.para1}</p>
                                    <p className='text-[#388e3c]'>{obj.para2}</p>
                                    <p className='text-stone-700'>{obj.para3}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </Carousel>
        </div>

    )
}

export default Suggestions