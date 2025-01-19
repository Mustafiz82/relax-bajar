import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-primary text-white p-5 py-10  sm:p-12 2xl:p-20'>


            <div className='flex flex-col sm:flex-row gap-10 lg:gap-0 justify-between'>
                <div className='order-2 sm:order-none  '>
                    <h1 className='text-2xl 2xl:text-3xl uppercase mt-[50px] sm:mt-[128px] mb-8 font-bold '>USEFUL LINKS</h1>
                    <ul className=' text-xl 2xl:text-2xl font-medium space-y-4 2xl:space-y-6'>
                        <li>Customer Support</li>
                        <li>FAQs</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='order-1 sm:order-none'>
                    <div className='bg-white w-fit py-4 p-2 '>
                        <Image width={1000} alt='logo' height={1000} src={"/images/logo.svg"} className='!h-[40px]  2xl:!h-[52px]  -mb-2 !w-auto' />
                    </div>
                    <h1 className='text-2xl sm:min-h-16 lg:min-h-0 2xl:text-3xl uppercase mt-16 mb-8 font-bold'>company</h1>
                    <ul className=' text-xl 2xl:text-2xl font-medium space-y-4 2xl:space-y-6'>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Privacy Policy</li>
                        <li>Refund and Returns Policy</li>

                    </ul>
                </div>
                <div className=' order-3 sm:order-none'>
                    <h1 className='text-2xl 2xl:text-3xl uppercase mt-[50px] sm:mt-[128px] mb-8 font-bold'>Join our community</h1>
                    <h1 className='text-2xl 2xl:text-3xl uppercase sm:mt-[100px] 2xl mt-[50px] 2xlmt-[128px] mb-8 font-bold'>VISIT OUR SHOP</h1>

                </div>
            </div>

            <hr className='text-white mt-16 2xl:mt-24 mb-8 2xl:mb-12 border-2 sm:order-none' />
            <div className="flex items-center justify-between">
                <p className='text-xl 2xl:text-2xl font-semibold '>RelaxBazar. All rights reserved.</p>

                <div className='text-black flex gap-6 text-xl 2xl:text-2xl'>
                    <div className='p-2 bg-white rounded-full'>
                        <FaFacebook />
                    </div>
                    <div className='p-2 bg-white rounded-full'>
                        <FaYoutube />
                    </div>
                    <div className='p-2 bg-white rounded-full'>
                        <FaInstagram />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;