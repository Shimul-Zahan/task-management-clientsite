import React from 'react'
import Slider from './Slider'

const Users = () => {
    return (
        <div className='p-4 lg:px-10 py-10 min-h-screen flex justify-start items-center'>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 items-center lg:gap-16">
                <div className="space-y-8">
                    <h1 className='text-lg text-red-500'>In it for the long haul</h1>
                    <div className='space-y-2'>
                        <h1 className='text-2xl font-bold capitalize'>type of people are using this website</h1>
                        <h1 className='text-lg'>A task manager you can trust for life. We’ve been building Todoist for 16 years and 325 days. Rest assured that we’ll never sell out to the highest bidder.</h1>
                    </div>
                    <h1 className='text-blue-400 text-lg cursor-pointer hover:shadow-lg w-[60%]'>Read about our long-term mission</h1>
                </div>
                <div className=" col-span-2">
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Users