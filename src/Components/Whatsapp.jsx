import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdClose } from 'react-icons/md';
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

const Whatsapp = ({ isWhatsappOpen, setIsWhatsappOpen }) => {

    const closeModal = () => {
        setIsWhatsappOpen(false)
    }

    return (
        <div className={`fixed z-[9999] bottom-0 right-0 ${isWhatsappOpen ? "" : "hidden"}`}>
            <div className='w-screen md:w-[350px] bg-[#3BE85A] p-2 pt-3 rounded-[10px]  shadow-lg  lg:mr-[40px] mt-[90px]  md:min-h-[400px]  '>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <FaWhatsapp className='text-3xl bg-white p-1 rounded-md text-[#3BE85A]' />
                        <h1 className='text-xl 2xl:text-2xl font-medium text-white'>
                            Relax Bazar
                        </h1>
                    </div>
                    <div className='text-2xl  flex gap-3 text-white'>
                        <IoMdCall className='cursor-pointer' />
                        <BiSolidVideoPlus  className='cursor-pointer'/>
                        <MdClose className='cursor-pointer' onClick={closeModal} />

                    </div>
                </div>
                <div className='bg-white px-2 mt-2 h-[calc(100vh-80px)] md:h-[340px]'>
                    <div className='h-[calc(100vh-150px)] md:h-[280px] flex pb-10 flex-col-reverse  '>
                        <div className='flex gap-2'>
                            <div className="bg-gray-200 rounded-full w-10 h-10 "></div>
                            <div className='text-sm mt-1 space-y-1'>
                                <h1 className=''>As-salamu alaykum Sir.</h1>
                                <h1 className=''>How can we help you?</h1>
                            </div>

                        </div>
                    </div>
                    <input type="text" placeholder='Message'
                        className='px-5  py-3 w-full bg-gray-200 outline-none rounded-full ' />
                </div>
            </div>

        </div>
    );
};

export default Whatsapp;