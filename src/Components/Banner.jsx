"use client"
import navData from '@/Data/NavData';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider from './Slider';

const Banner = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='flex  gap-5 my-5'>
            <ul className='w-1/4 relative min-h-[400px] 2xl:min-h-[600px] rounded-[10px] p-6 space-y-4 2xl:space-y-6 bg-white'>
                {navData?.map((item, idx) => (
                    <li
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className=' text-lg 2xl:text-xl font-medium'
                    >
                        <p className='cursor-pointer'>{item?.category}</p>

                        <div
                            hidden={(hoveredIndex !== idx) || (item?.subCategories?.length == 0)}
                            className='absolute   gap-5 shadow-md top-[20px] left-[200px] !z-[999] bg-white text-black  min-h-[300px]'
                        >
                            {
                                item?.subCategories?.[0]?.title ? <div className=' min-w-[500px] flex  px-5 py-6 gap-10'>
                                    {
                                        item?.subCategories?.map((item, idx) => (
                                            <div key={idx} className='flex-1'>
                                                <p className='text-lg cursor-pointer 2xl:text-xl font-bold'>{item?.title}</p>
                                                <ul className='mt-5 space-y-1'>
                                                    {
                                                        item?.items?.map((item, idx) => <li className='cursor-pointer' key={idx}>
                                                            {item?.name}
                                                        </li>)
                                                    }
                                                </ul>

                                            </div>
                                        ))
                                    }
                                </div> : <div className='min-w-[250px] space-y-2  px-5 py-6 gap-10'>
                                    {
                                        item?.subCategories?.map((item, idx) => (
                                            <div key={idx} className='flex-1'>
                                                <p className='text-lg cursor-pointer 2xl:text-xl font-medium'>{item?.name}</p>


                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </li>
                ))}
            </ul>
            <div className='bg-primary overflow-hidden rounded-[10px] relative min-h-[400px] w-3/4'>
                <Slider />
            </div>
        </div>
    );
};

export default Banner;
