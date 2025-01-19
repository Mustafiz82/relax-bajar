"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Whatsapp from './Whatsapp';
import CustomerSupport from './CustomerSupport';

const ReachOut = () => {

    const [isWhatsappOpen, setIsWhatsappOpen] = useState(false)
    const [isCustomerSupportOpen, setIsCustomerSupportOpen] = useState(false)
    return (
        <div>
            <div className='px-5 lg:px-0 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 2xl:gap-10 justify-between text-white text-center  text-xl 2xl:text-2xl font-medium my-9'>
                <Link href={"/file-upload"} className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                    <h2>Upload your List</h2>
                </Link>
                <div onClick={() => setIsWhatsappOpen(true)} className='w-full  rounded-[10px] bg-[#50BA00] px-6 h-[120px] flex items-center justify-center'>
                    <h2>Whats app</h2>
                </div>
                <div className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                    <h2>Call to Order</h2>
                </div>
                <div onClick={() => setIsCustomerSupportOpen(true)} className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                    <h2>Customer
                        Support</h2>
                </div>
                <div className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                    <h2>Family</h2>
                </div>
                <div className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                    <h2>Office</h2>
                </div>
            </div>

            <Whatsapp
                isWhatsappOpen={isWhatsappOpen}
                setIsWhatsappOpen={setIsWhatsappOpen}
            />

            <CustomerSupport
                isCustomerSupportOpen={isCustomerSupportOpen}
                setIsCustomerSupportOpen={setIsCustomerSupportOpen}

            />

        </div>
    );
};

export default ReachOut;