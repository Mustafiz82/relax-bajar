import Image from 'next/image';
import React from 'react';
import { TbCurrencyTaka, TbFlagPlus } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({ item }) => {
    return (
        <div className='p-5  rounded-md border-[3px] group hover:shadow-lg duration-300 border-[#CECECE] space-y-3 bg-white'>
            <div className="relative   w-full h-0 pb-[100%]">
                <Image
                    src={item?.image}
                    alt={item?.name}
                    layout="fill"
                    objectFit="contain"
                    className=' p-3 group-hover:p-0 duration-300'
                />
            </div>

            <h1
                style={{ minHeight: 'calc(2 * 1.25rem + 1.75rem )' }}
                className='text-lg group-hover:text-primary duration-300 md:text-xl  sm:line-clamp-2 leading-7     2xl:text-2xl font-medium'>
                {item?.name?.split('(')[0]}
                {item?.name?.includes('(') && (
                    <span className="block">
                        ({item?.name.split('(')[1]}
                    </span>
                )}
            </h1>
            <h2 className='py-1 rounded-full w-1/2 text-center text-white bg-primary text-sm 2xl:text-base'>{item?.weight}</h2>
            <div className='flex items-center justify-between'>
                <h2
                    className='text-lg 2xl:text-xl  text-primary flex gap-1 items-center'>
                    <TbCurrencyTaka className='text-2xl' />
                    {item?.price}
                </h2>

                <div className='bg-primary cursor-pointer p-1 rounded-[10px]'>
                    <FaPlus className='text-xl 2xl:text-2xl text-white' />
                </div>
            </div>

            
        </div>
    );
};

export default ProductCard;