import React from 'react'
import { useDrag } from 'react-dnd';

const DragableTaskItem = ({ task, onRefetch }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        // Specify the drag type as "TASK"
        type: "TASK",
        // Provide item data (task ID) for the drop handling
        item: task,
        // Collect function to get the dragging state
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));


    return (
        <li ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="mb-2 bg-white rounded-md">
            {/* Your task item content goes here */}
            <div className="px-4 py-5 sm:px-6">
                <div className="flex flex-col items-start justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{task.title}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{task.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium text-gray-500">Priority: <span className="text-green-600">{task.priority}</span></p>
                        <p className="text-sm font-medium text-gray-500">Deadline: <span className="text-green-600">{task.deadline}</span></p>
                    </div>

                    <div className="flex gap-2">
                        {/* <FaEdit className="text-[20px] text-indigo-600 hover:text-green-500" /> */}
                        {/* <MdDelete onClick={() => handleDelete(task._id)} className="text-[22px] text-indigo-600 hover:text-red-500" /> */}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default DragableTaskItem