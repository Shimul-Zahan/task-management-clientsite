import React from 'react'
import getAllTasks from '../Hooks/getAllTasks';
import DragableTaskItem from './DragableTaskItem';

const PreviousTask = () => {

    const { data, isLoading, refetch } = getAllTasks();
    console.log(data)


    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-[90%] h-[80%] grid gap-5 grid-cols-1 lg:grid-cols-3'>
                <div className='space-y-3 text-center border border-black'>
                    <h1 className='bg-red-500 text-xl py-3'>To Do</h1>
                    <ul className='space-y-3 text-lg'>
                        {
                            data?.map(task =>
                                <DragableTaskItem key={task._id} task={task} onRefetch={refetch} />
                            )
                        }
                    </ul>
                </div>
                <div className='space-y-3 text-center border border-black'>
                    <h1 className='bg-yellow-500 text-xl py-3'>Ongoing</h1>
                    <ul className='space-y-3 text-lg'>

                    </ul>
                </div>
                <div className='space-y-3 text-center border border-black'>
                    <h1 className='bg-green-500 text-xl py-3'>Completed</h1>
                    <ul className='space-y-3 text-lg'>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PreviousTask