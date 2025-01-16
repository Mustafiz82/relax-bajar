import Image from 'next/image';
import React from 'react';
import { TbCurrencyTaka, TbFlagPlus } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({ item }) => {
    return (
        <div className='p-5 space-y-3 bg-white'>
            <div className="relative w-full h-0 pb-[100%]">
                <Image
                    src={item?.image}
                    alt={item?.name}
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <h1 className='text-2xl font-medium'>{item?.name}</h1>
            <h2 className='py-1 rounded-full w-1/2 text-center text-white bg-primary'>{item?.weight}</h2>
            <div className='flex items-center justify-between'>
                <h2
                    className='text-xl  text-primary flex gap-1 items-center'>
                    <TbCurrencyTaka className='text-2xl' />
                    {item?.price}
                </h2>

                <div className='bg-primary p-1 rounded-[10px]'>
                    <FaPlus className='text-2xl text-white'/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;