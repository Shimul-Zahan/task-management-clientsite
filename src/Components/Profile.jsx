import React from 'react'

const Profile = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-[90%] h-[80%] space-y-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-5'>
                        <img src="https://images.unsplash.com/photo-1615022702095-ff2c036f3360?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-16 w-16 lg:h-32 lg:w-32 rounded-full shadow-xl' />
                        <div className='space-y-2'>
                            <h1 className='text-xl lg:text-4xl font-bold'>Hello Mr. Admin</h1>
                            <h1 className='text-base lg:text-lg'>You have total 10 tasks</h1>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <button className='px-6 py-3 border border-black'>Logout</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                    <div className='p-4 lg:p-10 border border-black text-center'>
                        <h1 className='text-xl'>Total tasks</h1>
                        <h1 className='text-3xl font-bold'>10</h1>
                    </div>
                    <div className='p-4 lg:p-10 border border-black text-center'>
                        <h1 className='text-xl'>Total tasks</h1>
                        <h1 className='text-3xl font-bold'>10</h1>
                    </div>
                    <div className='p-4 lg:p-10 border border-black text-center'>
                        <h1 className='text-xl'>Total tasks</h1>
                        <h1 className='text-3xl font-bold'>10</h1>
                    </div>
                    <div className='p-4 lg:p-10 border border-black text-center'>
                        <h1 className='text-xl'>Total tasks</h1>
                        <h1 className='text-3xl font-bold'>10</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile