"use client"
import ProductCard from '@/shared/ProductCard';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ProductListSection = ({ data, title }) => {
    const [ShowCategoryProduct, setShowCategoryProduct] = useState(false);
    const [slicedProductNumber, setSliceProductNumber] = useState(5);
    const isLargeScreen = 1280


    const handleShowCategoryProduct = () => {
        setShowCategoryProduct(!ShowCategoryProduct);
        if (slicedProductNumber === 5) {
            setSliceProductNumber(data?.length);
        } else {
            setSliceProductNumber(5);
        }
    };

    const updateSliceNumber = () => {
        if (window.innerWidth < isLargeScreen) { 
            setSliceProductNumber(6);
        } else {
            setSliceProductNumber(5);
        }
    };

    
    useEffect(() => {
        updateSliceNumber(); 
        window.addEventListener('resize', updateSliceNumber);

        return () => {
            window.removeEventListener('resize', updateSliceNumber);
        };
    }, []);



    return (
        <div className="my-14 mx-5 lg:mx-0  lg:border-2 transition-[height] duration-500 border-primary rounded-[10px] lg:p-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-primary">{title}</h1>
                <div onClick={handleShowCategoryProduct} className='flex gap-1 cursor-pointer items-center'>
                    <span> View more</span>
                    <button
                        className={`text-2xl  text-primary transition-transform duration-300 ${ShowCategoryProduct ? 'rotate-180' : ''}`}
                    >
                        <MdKeyboardArrowUp />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 my-5 gap-5">
                {data?.slice(0, slicedProductNumber)?.map((item, idx) => (
                    <div key={idx}>
                        {/* Category Card */}
                        <ProductCard item={item} />
                    </div>
                ))}
            </div>

            {/* Expanded Content */}

        </div>
    );
};

export default ProductListSection;