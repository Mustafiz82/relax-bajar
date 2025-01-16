import React from 'react';

const ReachOut = () => {
    return (
        <div className='flex gap-5 2xl:gap-10 justify-between text-white text-center  text-xl 2xl:text-2xl font-medium my-9'>
            <div className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                <h2>Upload your List</h2>
            </div>
            <div className='w-full  rounded-[10px] bg-[#50BA00] px-6 h-[120px] flex items-center justify-center'>
                <h2>Whats app</h2>
            </div>
            <div className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                <h2>Call to Order</h2>
            </div>
            <div className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                <h2>Customer
                Support</h2>
            </div>
            <div className='w-full  rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                <h2>Family</h2>
            </div>
            <div className='w-full max-w-[200px] rounded-[10px] bg-primary px-6 h-[120px] flex items-center justify-center'>
                <h2>Office</h2>
            </div>
        </div>
    );
};

export default ReachOut;