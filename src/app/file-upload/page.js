"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const page = () => {

    const [file, setFile] = useState("")


    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    console.log(file);
    return (
        <div className=' pb-40  3xl:pt-28  pt-10 max-w-screen-3xl mx-auto  2xl:mx-[60px] lg:mx-[40px] mt-[120px] lg:mt-0 lg:pt-0 3xl:mx-auto 3xl:px-[60px]'>
            <label
                htmlFor='file-upload'
                className='bg-primary w-full relative flex flex-col gap-20 justify-center items-center cursor-pointer h-[500px]'
            >
                <h2
                    className={`text-white font-semibold absolute top-[80px] text-xl 2xl:text-2xl 
                    ${file ? "hidden" : "block"}`}>Have a List? Upload Here
                </h2>
                <Image src={"/icons/image-icon.svg"}
                    alt='upload-image'
                    width={500}
                    height={500}
                    className={`w-[150px]  h-[150px]  
                    ${file ? "opacity-100" : "opacity-50"} `}
                    
                     />

                <button
                    className={`px-10 py-5 text-xl font-semibold bg-white rounded-[10px] ${file ? "block" : "hidden"}`}>Save & Continue
                </button>
            </label>
            <input
                onChange={handleFileChange}
                type="file"
                className='hidden'
                name=""
                id="file-upload"
            />

        </div>
    );
};

export default page;