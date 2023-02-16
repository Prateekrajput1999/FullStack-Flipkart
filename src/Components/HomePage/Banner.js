import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { bannerData } from '../db';

const Banner = () => {
    return (
        <div className='cursor-pointer rounded-md pt-2 px-1'>
            <Carousel>
                {
                    bannerData.map(obj => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-[270px]"
                                    src={obj.url}
                                    alt={"Slide " + obj.id}
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Banner