"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination  , Autoplay} from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,

                }}
                loop={true}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false, 
                }}
                
                modules={[Pagination , Autoplay]}
                className="mySwiper z-[-1] h-full">
                <SwiperSlide>
                    <Image src={"/images/banner_image_1.png"} alt='banner' className='rounded-[10px] !z-[-50]' layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/banner_image_1.png"} alt='banner' className='rounded-[10px] !z-[-50]' layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/banner_image_1.png"} alt='banner' className='rounded-[10px] !z-[-50]' layout='fill' />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
