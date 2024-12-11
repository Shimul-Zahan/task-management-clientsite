import React from 'react'
import { useDrag, useDrop } from 'react-dnd';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import axios from 'axios';
import DragableTaskItem from './DragableTaskItem';
import getAllTasks from '../Hooks/getAllTasks';
import { toast } from 'react-toastify';

const Todo = ({ task, onRefetch }) => {


  const { data, isLoading, refetch } = getAllTasks();
  console.log(data)

  // droppable
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["Ongoing", "TASK"],// Specify the accepted drag type
    drop: (item) => {
      // console.log("Dropped item:", item); // Log the dropped item
      handleDrop(item)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }
  ));

  const handleDrop = async (item) => {
    const res = await axios.patch(`http://localhost:5000/update/${item._id}?query=todo`);
    if (res.data.modifiedCount > 0) {
      toast.success('Task reverse to todo', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      refetch();
      onRefetch();
    }
  };


  return (
    <div ref={drop} className={`space-y-3 text-center border border-black ${isOver ? 'bg-green-100' : ''}`}>
      <h1 className='bg-yellow-500 text-xl py-3'>To Do</h1>
      <ul ref={drop} className='space-y-3 text-lg'>
        {
          data?.map(task =>
            task.status === 'todo' &&
            <DragableTaskItem key={task._id} task={task} onRefetch={refetch} />
          )
        }
      </ul>
    </div>
  )
}

export default Todo