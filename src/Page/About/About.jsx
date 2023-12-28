import React, { useEffect, useState } from 'react'
import ParallaxImage from '../../assets/302l [Converted].png'
import { Link } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const About = () => {

    // AOS.init({
    //     duration: "1000"
    // });

    return (
        <div className='py-20'>
            <h1 className="text-center mt-10 font-bold text-1xl">About Us</h1>
            <h1 className="text-center mt-1 font-bold text-2xl">What we do</h1>
            <div className="flex justify-center">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row-reverse">
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                            <h1 className="font-bold text-xl">We are providing a better facility.</h1>
                            <p>At our core, we are dedicated to providing you with an unmatched experience. Our commitment revolves around delivering services that go beyond expectations, ensuring your satisfaction every step of the way</p>
                            <div className="flex space-x-1 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-1">
                                    <p className="leadi">Quality Assurance: Our services are crafted with precision and backed by rigorous quality checks, ensuring excellence in every aspect.!</p>
                                </div>
                            </div>
                            <div className="flex space-x-1 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>

                                <div className="space-y-1">
                                    <p className="leadi">Quality Assurance: Our services are crafted with precision and backed by rigorous quality checks, ensuring excellence in every aspect.!</p>
                                </div>

                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-1">
                                    <p className="leadi">Quality Assurance: Our services are crafted with precision and backed by rigorous quality checks, ensuring excellence in every aspect.!</p>
                                </div>
                            </div>
                            <Link to="/about"><button className="text-center bg-red-500 text-white px-5 py-3 rounded-xl">Read More</button></Link>
                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                <img src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                            </div>

                        </div>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default About