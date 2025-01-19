import React from 'react';
import { FaMinus } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

const CustomerSupport = ({ isCustomerSupportOpen, setIsCustomerSupportOpen }) => {

    const closeModal = () => {
        setIsCustomerSupportOpen(false)
    }

    return (
        <div className={`fixed z-[9999] bottom-0 right-0 ${isCustomerSupportOpen ? "" : "hidden"}`}>
            <div className='w-[350px] bg-primary p-2 pt-3 rounded-[10px]  shadow-lg  mr-[40px] mt-[90px] min-h-[500px]  '>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>

                        <h1 className='text-xl 2xl:text-2xl font-medium text-white'>
                            Relax Bazar
                        </h1>
                    </div>
                    <div className='text-2xl  flex gap-3 text-white'>
                        <FaMinus className='cursor-pointer' />
                        <MdClose className='cursor-pointer' onClick={closeModal} />

                    </div>
                </div>
                <div className='bg-white px-2 mt-2 h-[440px]'>
                    <div className='mx-2  pt-5   '>
                        <h1 className='text-lg font-medium text-center'>Welcome to Relax bazar Customer
                            Support! We are here to assist you!  </h1>
                        <input
                            type="text"
                            className='px-3 py-2 mt-4 rounded-lg w-full border border-gray-300 outline-none'
                            placeholder='Name*'
                            name=""
                            id=""
                        />
                        <div className='flex gap-2 '>
                            <h3 className='px-3 flex-1 py-2 mt-4 rounded-lg w-full border border-gray-300 outline-none'>+880</h3>
                            <input
                                type="tel "
                                className='px-3  py-2 mt-4 rounded-lg w-full border border-gray-300 outline-none'
                                placeholder='Phone Number*'
                                name=""
                                id=""
                            />
                        </div>
                        <textarea name="" className='px-3  py-2 mt-4 rounded-lg w-full border border-gray-300 h-28 resize-none outline-none' id=""></textarea>
                        <button className='px-5 mb-5 py-2 w-full bg-primary outline-none rounded-xl text-lg text-white uppercase'>
                            start chat
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerSupport;