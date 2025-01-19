import Image from 'next/image';
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoIosCloseCircle } from "react-icons/io";
import { MdDelete } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';

const Cart = ({isModalOpen, setIsModalOpen}) => {

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={`fixed inset-0 flex  justify-end bg-white bg-opacity-40 z-[9999] ${isModalOpen ? "" : "hidden"}`}>
            <div className='w-[450px] p-10 bg-white shadow-lg  mr-[40px] mt-[90px] min-h-[300px] h-fit'>

                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium 2xl:text-2xl'>My cart </h1>
                    <IoIosCloseCircle
                    onClick={closeModal}
                    className='text-primary cursor-pointer text-2xl ' />
                </div>

                <div className='border-2 flex gap-5 p-3  mt-5'>
                    <div className='w-1/3'>
                        <Image
                            src={"/images/rice/pran_miniket.png"}
                            className="w-full h-full"
                            width={500}
                            height={500}
                            alt='pran miniekt rice'
                        />
                    </div>

                    <div className='w-2/3' >
                        <h1 className='text-xl max-w-[150px] font-medium 2xl:text-2xl'>Pran Miniket Rice</h1>
                        <div className='flex mt-3 justify-between items-center'>
                            <h2 className='py-1 rounded-full w-1/2 text-center text-white bg-primary text-sm 2xl:text-base'>{"1kg"}</h2>
                            <h2
                                className='text-lg 2xl:text-xl  text-primary flex gap-1 items-center'>
                                <TbCurrencyTaka className='text-2xl' />
                                {"78"}
                            </h2>
                        </div>
                        <div className='flex items-center mt-5 justify-between '>
                            <div className='bg-primary cursor-pointer p-1 rounded-[10px]'>
                                <FaPlus className='text-xl 2xl:text-2xl text-white' />
                            </div>
                            <div className='bg-primary cursor-pointer p-1 rounded-[10px]'>
                                <FaMinus className='text-xl 2xl:text-2xl text-white' />
                            </div>

                            <MdDelete className='text-2xl text-primary 2xl:text-3xl ' />
                        </div>

                    </div>
                </div>

                <div className='mt-20'>
                    <div className='text-xl flex justify-between items-center  2xl:text-2xl font-medium'>
                        <h1 className=''>Subtotal</h1>
                        <h2
                            className='text-xl 2xl:text-xl  text-primary flex gap-1 items-center'>
                            <TbCurrencyTaka className='text-2xl' />
                            {"78"}
                        </h2>

                    </div>
                    <p>Shiping and taxes calculated at checkout</p>
                </div>
                <button className='w-full py-3 text-white bg-primary rounded-md mt-3' > Checkout</button>

            </div>
        </div>


    );
};

export default Cart;