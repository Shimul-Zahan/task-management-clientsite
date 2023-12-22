import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import image1 from '../assets/icon/banker.png'
import image2 from '../assets/icon//businessman.png'
import image3 from '../assets/icon/freelance.png'
import image4 from '../assets/icon/graduated.png'
import image5 from '../assets/icon/shopping-online.png'
import image6 from '../assets/icon/work-from-home.png'

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-[#001D4F] text-white h-[350px] rounded-lg hover:scale-[1.1] p-10 flex flex-col justify-center items-center gap-5'>
                        <img src={image1} alt="" className='h-20 w-20 rounded-full bg-white' />
                        <h1 className='text-2xl font-bold'>Bankers</h1>
                        <h1 className='text-xl'>Track project progress, assign tasks, and collaborate with teams effectively.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#001D4F] text-white h-[350px] rounded-lg hover:scale-[1.1] p-10 flex flex-col justify-center items-center gap-5'>
                        <img src={image2} alt="" className='h-20 w-20 rounded-full bg-white' />
                        <h1 className='text-2xl font-bold'>Project Managers</h1>
                        <h1 className='text-xl'>Track project progress, assign tasks, and collaborate with teams effectively.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#001D4F] text-white h-[350px] rounded-lg hover:scale-[1.1] p-10 flex flex-col justify-center items-center gap-5'>
                        <img src={image3} alt="" className='h-20 w-20 rounded-full bg-white' />
                        <h1 className='text-2xl font-bold'>Freelancar</h1>
                        <h1 className='text-xl'>Manage multiple projects, track billable hours, and meet client deadlines.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#001D4F] text-white h-[350px] rounded-lg hover:scale-[1.1] p-10 flex flex-col justify-center items-center gap-5'>
                        <img src={image4} alt="" className='h-20 w-20 rounded-full bg-white' />
                        <h1 className='text-2xl font-bold'>Students</h1>
                        <h1 className='text-xl'>Plan assignments, study schedules, and stay organized for academic success.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#001D4F] text-white h-[350px] rounded-lg hover:scale-[1.1] p-10 flex flex-col justify-center items-center gap-5'>
                        <img src={image5} alt="" className='h-20 w-20 rounded-full bg-white' />
                        <h1 className='text-2xl font-bold'>Small Business Owners</h1>
                        <h1 className='text-xl'>Delegate tasks, track team productivity, and streamline operations..</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#001D4F] text-white h-[350px] rounded-lg hover:scale-[1.1] p-10 flex flex-col justify-center items-center gap-5'>
                        <img src={image6} alt="" className='h-20 w-20 rounded-full bg-white' />
                        <h1 className='text-2xl font-bold'>Contractor</h1>
                        <h1 className='text-xl'>Track project progress, assign tasks, and collaborate with teams effectively.</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}