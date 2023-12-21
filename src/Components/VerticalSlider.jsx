import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function VerticalSlider() {
    return (
        <>
            <div className='flex justify-center items-center bg-red-500'>
                <Swiper
                    direction={'vertical'}
                    height={100}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='block w-full h-full object-cover'>
                        <img src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b" alt="" className='h-[400px] w-full' />
                    </SwiperSlide>
                    <SwiperSlide className=''>Slide 3</SwiperSlide>
                    <SwiperSlide className=''>Slide 3</SwiperSlide>
                    <SwiperSlide className=''>Slide 3</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}