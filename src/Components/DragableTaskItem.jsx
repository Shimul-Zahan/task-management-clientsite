import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useDrag } from 'react-dnd';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MyAuthContext } from '../Context/AuthContext';
import { useForm } from 'react-hook-form';

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

    const { user } = useContext(MyAuthContext);
    const [showData, setData] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const task = {
            ...data,
            email: user?.email,
            status: 'todo',
        }
        console.log(task)
        const res = await axios.post('http://localhost:5000/add-task', task);
        const ack = res.data;
        console.log(ack);
    }

    const handleModal = (data) => {
        // console.log(data);
        // setData(data)
        document.getElementById('my_modal_3').showModal()
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
                        <FaEdit onClick={() => handleModal(task)} className="text-[20px] text-indigo-600 hover:text-green-500 cursor-pointer" />
                        <MdDelete onClick={() => handleDelete(task._id)} className="text-[22px] text-indigo-600 hover:text-red-500 cursor-pointer" />
                    </div>
                </div>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="flex flex-col justify-start items-center gap-3">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Title</span>
                                </div>
                                <input type="text" placeholder="Title" className="input input-bordered w-full"
                                    defaultValue={showData?.title}
                                    {...register("title", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Deadline</span>
                                </div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full"
                                    defaultValue={showData?.deadline}
                                    {...register("deadline", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Priority</span>
                                </div>
                                <select className="select select-bordered"
                                    {...register("priority")}
                                    defaultValue={showData?.priority}
                                >
                                    <option disabled selected>Priority</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                            </label>
                        </div>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Task description</span>
                            </div>
                            <textarea
                                defaultValue={showData?.description}
                                {...register("description", { required: true })}
                                placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>
                        <button type="submit" className="py-2 px-8 border border-black w-full rounded-full bg-yellow-500">Submit</button>
                    </form>
                </div>
            </dialog> */}
        </li>
    )
}

export default DragableTaskItem