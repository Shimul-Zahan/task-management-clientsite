import React from 'react'
import getAllTasks from '../Hooks/getAllTasks';
import DragableTaskItem from './DragableTaskItem';
import CompleteList from './CompleteList';
import { useDrop } from 'react-dnd';
import Ongoing from './Ongoing';
import Todo from './Todo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PreviousTask = () => {

    const { data, isLoading, refetch } = getAllTasks();
    console.log(data)


    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <ToastContainer />
            <div className='w-[90%] h-[80%] grid gap-5 grid-cols-1 lg:grid-cols-3'>
                <Todo />
                {/* Ongoing task */}
                <Ongoing />

                {/* complete list */}
                <CompleteList />
            </div>
        </div>
    )
}

export default PreviousTask