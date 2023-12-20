import React from 'react'
import image from '../assets/302l [Converted].png'

const Banner = () => {
    return (
        <div className='' style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'cover'}}>
            <div className='px-10 h-screen'>
                <h1>Organize your work and life, finally.</h1>
                <p>Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</p>
                <button className='px-10 py-2 rounded-lg bg-red-500'>Let's Explore</button>
            </div>
        </div>
    )
}

export default Banner