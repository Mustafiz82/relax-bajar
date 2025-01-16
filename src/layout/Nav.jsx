import Image from 'next/image';
import React from 'react';
import { GrSearch } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";



const Nav = () => {
    return (
        <div className='py-[20px] 2xl:py-[30px] bg-white flex gap-5 items-center px-[40px] 2xl:px-[60px]'>
            <div className=' '>
                <Image width={1000} alt='logo' height={1000} src={"/images/logo.svg"} className='!h-[40px] 2xl:!h-[52px]  -mb-2 !w-auto' />
            </div>

            <div className='flex-1 flex  items-center border-2 rounded-[10px] border-primary'>
                <input type="text" className='w-full h-full bg-transparent outline-none px-7 ' placeholder='Search Product' />
                <span className='flex justify-center rounded-[7px] items-center p-3 2xl:p-4 bg-primary'>
                    <GrSearch className='text-white font-bold text-2xl' />
                </span>
            </div>

            <div className='flex text-2xl 2xl:text-3xl text-primary ml-5 gap-10'>
                <MdOutlineShoppingCart />
                <IoNotificationsOutline />
                <Image width={1000} height={1000} src={"/icons/profile.svg"} className='!h-[24px] 2xl:!h-[30px] !w-[24px] 2xl:!w-[30px] ' />

            </div>

        </div>
    );
};

export default Nav;