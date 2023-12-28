import React, { useContext } from 'react'
import PreviousTask from './PreviousTask'
import { MyAuthContext } from '../Context/AuthContext'
import getAllTasks from '../Hooks/getAllTasks';

const Profile = () => {

    const { user, logOut } = useContext(MyAuthContext);
    const { data } = getAllTasks();
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-[90%] h-[80%] space-y-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-5'>
                        <img src={user?.photoURL} alt="" className='h-16 w-16 lg:h-32 lg:w-32 rounded-full shadow-xl' />
                        <div className='space-y-2'>
                            <h1 className='text-xl lg:text-4xl font-bold'>{user?.displayName}</h1>
                            <h1 className='text-base lg:text-lg'>You have total {data?.length} tasks</h1>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <button onClick={handleLogOut} className='px-6 py-3 border border-black'>Logout</button>
                    </div>
                </div>
                <div>
                    <PreviousTask />
                </div>
            </div>
        </div>
    )
}

export default Profile