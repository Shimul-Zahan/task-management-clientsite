import axios from 'axios';
import React from 'react'
import { useDrag } from 'react-dnd';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DragableTaskItem = ({ task, onRefetch }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TASK",
        item: task,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:5000/delete/${id}`);
        console.log(res.data)
    }


    return (
        <li ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="mb-2 bg-white rounded-md">
            {/* Your task item content goes here */}
            <div className="px-4 py-5 sm:px-6">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize">{task.title}</h3>
                    <p className={`mt-1 max-w-2xl text-sm text-gray-500 capitalize px-4 rounded-full 
                    ${task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'low' ? 'bg-green-500' : 'bg-yellow-500'}`}>{task.priority}</p>
                </div>
                <div className="space-y-1 mt-3 text-start">
                    <p className="text-sm font-medium text-gray-500">Deadline: <span className="text-green-600">{task.deadline}</span>
                    </p>
                    <p className="text-sm font-medium text-gray-500">Description: <span className="text-green-600">{task.description}</span>
                    </p>

                    <div className="flex justify-end gap-5">
                        <FaEdit className="text-[20px] text-indigo-600 hover:text-green-500 cursor-pointer" />
                        <MdDelete onClick={() => handleDelete(task._id)} className="text-[22px] text-indigo-600 hover:text-red-500 cursor-pointer" />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default DragableTaskItem