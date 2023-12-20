import React from 'react'
import image from '../assets/302l [Converted].png'

const Banner = () => {
    return (
        <div className=' flex items-center justify-start h-screen' style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'cover'}}>
            <div className='px-10 text-white space-y-6 text-center lg:text-start'>
                <h1 className='text-4xl lg:text-7xl font-bold'>Organize your work <br /> and life, finally.</h1>
                <p className='text-base lg:text-xl'>Become focused, organized, and calm with Todoist. <br /> The world’s #1 task manager and to-do list app.</p>
                <button className='px-8 py-4 text-xl rounded-lg bg-red-500'>Let's Explore</button>
            </div>
        </div>
    )
}

export default Banner