"use client";
import { categoryData } from '@/Data/CategoryData';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import ProductCard from '../shared/ProductCard';

const Category = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [ShowCategoryProduct, setShowCategoryProduct] = useState(false);
    const [productArray, setProductArray] = useState([]);
    const [slicedProductNumber, setSliceProductNumber] = useState(5);

    const handleProductExpand = (products, idx) => {
        if (expandedCategory === idx) {
            setExpandedCategory(null);
            setProductArray([]);
        } else {
            setExpandedCategory(idx);
            setProductArray(products);
        }
    };

    const handleShowCategoryProduct = () => {
        setShowCategoryProduct(!ShowCategoryProduct);
        if (slicedProductNumber === 5) {
            setSliceProductNumber(categoryData?.length);
        } else {
            setSliceProductNumber(5);
        }
    };

    return (
        <div className="my-14 border-2 transition-[height] duration-500 border-primary rounded-[10px] p-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-primary">Product Category</h1>
                <div onClick={handleShowCategoryProduct} className='flex gap-1 cursor-pointer items-center'>
                    <span> View more</span>
                    <button
                        className={`text-2xl  text-primary transition-transform duration-300 ${ShowCategoryProduct ? 'rotate-180' : ''}`}
                    >
                        <MdKeyboardArrowUp />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-5 my-5 gap-5">
                {categoryData?.slice(0, slicedProductNumber)?.map((item, idx) => (
                    <div key={idx}>
                        {/* Category Card */}
                        <div
                            className={`h-fit p-8 bg-white gap-2 flex flex-col items-center justify-center cursor-pointer 
                            ${expandedCategory !== null && expandedCategory !== idx ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => {
                                if (expandedCategory === null || expandedCategory === idx) {
                                    handleProductExpand(item?.products, idx);
                                }
                            }}
                        >
                            <div className="relative w-full h-0 pb-[100%]">
                                <Image
                                    src={item?.image}
                                    alt={item?.name}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <h1 className="text-primary text-2xl font-medium">{item?.name}</h1>
                            <button
                                className={`text-2xl text-primary transition-transform duration-300 ${expandedCategory === idx ? 'rotate-180' : ''}`}
                            >
                                <MdKeyboardArrowUp />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Expanded Content */}
            {expandedCategory !== null && (
                <div className="grid mt-10 grid-cols-5 my-5 gap-5">
                    {productArray?.map((item, idx) => (
                        <ProductCard key={idx} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
