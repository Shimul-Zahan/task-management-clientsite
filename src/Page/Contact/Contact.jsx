import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import icon from '../../assets/icon/graduated.png'
// import TitleBar from '../../Utils/TitleBar'
// import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_7ay2tdk', 'template_z5dxop8', form.current, '8R2AlonC3RdZ-e1uD')
        //     .then((result) => {
        //         Swal.fire({
        //             title: "Good job!",
        //             text: "You clicked the button!",
        //             icon: "success"
        //         });
        //         e.target.reset();
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    return (
        <div className='py-10'>
            <section class="bg-gray-100 lg:mb-20">
                <div data-aos="fade-right" class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:col-span-2 lg:py-12">
                            <p class="max-w-xl text-lg text-[#0C356A]">
                                We’ve been building Todoist for 16 years and 325 days. Rest assured that we’ll never sell out to the highest bidder.
                            </p>

                            <div class="mt-8 text-[#0C356A] space-y-2">
                                Jones Hopkins Tower 230, New Market Road <br />Rajshahi, Bangladesh
                                <h1>01714760739</h1>
                                <h1>algobot@gmail.com</h1>
                            </div>
                        </div>

                        <div class="rounded-lg bg-[white] p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form ref={form} onSubmit={sendEmail} class="space-y-4">
                                <div>
                                    <label class="sr-only" for="name">Name</label>
                                    <input
                                        class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        name="user_name"
                                    />
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="sr-only" for="email">Email</label>
                                        <input
                                            class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            name="user_email"
                                        />
                                    </div>

                                    <div>
                                        <label class="sr-only" for="phone">Phone</label>
                                        <input
                                            class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input
                                            class="peer sr-only"
                                            id="option1"
                                            type="radio"
                                            tabindex="-1"
                                            name="option"
                                        />

                                        <label
                                            for="option1"
                                            class="block w-full rounded-lg border-[#0C356A] border-2 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-[#0C356A] peer-checked:text-white"
                                            tabindex="0"
                                        >
                                            <span class="text-sm"> Message </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            class="peer sr-only"
                                            id="option2"
                                            type="radio"
                                            tabindex="-1"
                                            name="option"
                                        />

                                        <label
                                            for="option2"
                                            class="block w-full rounded-lg border-[#0C356A] border-2 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-[#0C356A] peer-checked:text-white"
                                            tabindex="0"
                                        >
                                            <span class="text-sm"> Rating </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            class="peer sr-only"
                                            id="option3"
                                            type="radio"
                                            tabindex="-1"
                                            name="option"
                                        />

                                        <label
                                            for="option3"
                                            class="block w-full rounded-lg border-[#0C356A] border-2 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-[#0C356A] peer-checked:text-white"
                                            tabindex="0"
                                        >
                                            <span class="text-sm"> Feedback </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label class="sr-only" for="message">Message</label>

                                    <textarea
                                        class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                        placeholder="Your text"
                                        rows="8"
                                        id="message"
                                        name="message"
                                    ></textarea>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="inline-block w-full rounded-lg bg-[#0C356A] px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Request Now 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="fade-right" className='my-10 mx-10 flex flex-col justify-center items-center relative'>
                <hr className='w-3/5 bg-[#0C356A] h-[3px]' />
                <h1 className='text-5xl font-medium text-center absolute -top-7 text-red-500 bg-white px-4'>Stay With Us</h1>
            </div>

            <div data-aos="fade-right" className='flex lg:px-10 px-4 justify-center items-center container mx-auto mt-20'>
                <div className='container mx-auto mb-20 grid grid-cols-1 gap-10 lg:grid-cols-3 '>
                    <div className='space-y-2 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <h1 className='text-2xl font-bold text-[#0C356A]'>Quick Links</h1>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={icon} alt="" className='h-8 w-8' />
                            <p className='text-base font-thin text-[#0C356A]'>AlgoWebBot_636</p>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={icon} alt="" className='h-8 w-8' />
                            <p className='text-base font-thin text-[#0C356A]'>AlgoWebBot_Viber</p>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={icon} alt="" className='h-8 w-8' />
                            <p className='text-base font-thin text-[#0C356A]'>AlgoWebBot_In_7088</p>
                        </div>
                    </div>
                    <div className='space-y-4 flex items-center flex-col '>
                        <img src={icon} alt="" className='h-20 w-20' />
                        <p className='text-lg font-thin text-center'>Jones Hopkins Tower <br />230, New Market Road <br />Rajshahi, Bangladesh</p>
                    </div>
                    <div className='space-y-2 text-end flex flex-col justify-center items-center lg:justify-end lg:items-end'>
                        <h1 className='text-2xl font-bold text-[#0C356A]'>Contact</h1>
                        <div className='flex justify-end items-center gap-4'>
                            <p className='text-base font-thin text-[#0C356A]'>+98 065520</p>
                            <img src={icon} alt="" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-end items-center gap-4'>
                            <p className='text-base font-thin text-[#0C356A]'>+98 065520</p>
                            <img src={icon} alt="" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-end items-center gap-4'>
                            <p className='text-base font-thin text-[#0C356A]'>algowebbot@gmai.com</p>
                            <img src={icon} alt="" className='h-8 w-8' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact