"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import {
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdOutlineShoppingCart,
} from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import navData from "@/Data/NavData";
import Link from "next/link";
import Cart from "@/Components/Cart";

const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isNavHidden, setIsNavHidden] = useState(true);
    const [isModalOpen , setIsModalOpen] = useState(false)

    const toggleSubItems = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the currently open item
        } else {
            setActiveIndex(index); // Open the clicked item
        }
    };

    return (
        <div className="w-screen    lg:sticky fixed  top-0 z-[999] lg:w-auto overflow-hidden ">

            {/* navbar logo and icons for mobile and all for large device  */}
            <div className=" sticky !z-[999] top-0">
                <div className="py-[20px]   2xl:py-[30px] justify-between bg-white flex gap-5 items-center px-5 lg:px-[40px] 2xl:px-[60px]">
                    <Link href={"/"}>
                        <Image
                            width={1000}
                            alt="logo"
                            height={1000}
                            src={"/images/logo.svg"}
                            className="!h-[40px] 2xl:!h-[52px] lg:-mb-2 !w-auto"
                        />
                    </Link>

                    <div className="hidden flex-1 lg:flex items-center border-2 rounded-[10px] border-primary">
                        <input
                            type="text"
                            className="w-full h-full bg-transparent outline-none px-7"
                            placeholder="Search Product"
                        />
                        <span className="flex justify-center rounded-[7px] items-center p-3 2xl:p-4 bg-primary">
                            <GrSearch className="text-white font-bold text-2xl" />
                        </span>
                    </div>

                    <div className="flex text-2xl 2xl:text-3xl text-primary ml-5 gap-4 lg:gap-10">
                        <MdOutlineShoppingCart 
                        className="cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                         />
                        <IoNotificationsOutline className="cursor-pointer" />
                        <Image
                            alt="profile"
                            width={1000}
                            height={1000}
                            src={"/icons/profile.svg"}
                            className="!h-[24px]  cursor-pointer 2xl:!h-[30px] !w-[24px] 2xl:!w-[30px]"
                        />
                        <AiOutlineMenu className="lg:hidden" onClick={() => setIsNavHidden(!isNavHidden)} />
                    </div>
                </div>

                <div className="bg-white flex lg:hidden items-center border-2 rounded-[2px] border-primary border-x-0">
                    <input
                        type="text"
                        className="w-full h-full bg-transparent outline-none px-7"
                        placeholder="Search Product"
                    />
                    <span className="flex justify-center rounded-[2px] items-center p-3 2xl:p-4 bg-primary">
                        <GrSearch className="text-white font-bold text-2xl" />
                    </span>
                </div>
            </div>

            {/* dropdown nav category list and search bar */}
            <ul
                className={`w-full transition-[max-height, opacity] px-6 duration-500 ease-in-out lg:hidden rounded-[10px] space-y-4 2xl:space-y-6 bg-white ${isNavHidden ? "max-h-0 opacity-0 overflow-hidden" : "py-6 max-h-[1000px] opacity-100"
                    }`}
            >
                {navData?.map((item, idx) => (
                    <li key={idx}>
                        <div
                            onClick={() => toggleSubItems(idx)}
                            className="text-lg flex justify-between 2xl:text-xl font-medium cursor-pointer"
                        >
                            <p>{item?.category}</p>
                            <button
                                className={`text-2xl text-primary transition-transform duration-300 ${item?.subCategories?.length > 0 ? "" : "hidden"
                                    }`}
                            >
                                {activeIndex === idx ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </button>
                        </div>

                        {/* Navbar category subitem dropdown */}
                        <div
                            className={`overflow-hidden transition-[max-height, opacity] duration-500 ease-in-out ${activeIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            {item?.subCategories?.[0]?.title ? (
                                <div className="min-w-[500px] flex px-5 py-6 gap-10">
                                    {item?.subCategories?.map((subItem, subIdx) => (
                                        <div key={subIdx} className="flex-1">
                                            <p className="text-lg cursor-pointer 2xl:text-xl font-bold">
                                                {subItem?.title}
                                            </p>
                                            <ul className="mt-5 space-y-1">
                                                {subItem?.items?.map((subItemDetail, detailIdx) => (
                                                    <li key={detailIdx} className="cursor-pointer">
                                                        {subItemDetail?.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="min-w-[250px] px-5 py-6 space-y-2">
                                    {item?.subCategories?.map((subItem, subIdx) => (
                                        <div key={subIdx}>
                                            <p className="text-lg cursor-pointer 2xl:text-xl font-medium">
                                                {subItem?.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>


            <Cart
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default Nav;
