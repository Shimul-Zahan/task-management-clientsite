import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useDrag } from 'react-dnd';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MyAuthContext } from '../Context/AuthContext';
import { useForm } from 'react-hook-form';
import getAllTasks from '../Hooks/getAllTasks';
import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';

const DragableTaskItem = ({ task }) => {

    const { data, refetch } = getAllTasks();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TASK",
        item: task,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/delete/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }

    const { user } = useContext(MyAuthContext);
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState(null);

    const handleOpen = (id) => {
        setOpen(true)
        setId(id);
    };
    const handleClose = () => {
        setOpen(false)
        setId(id);
    };

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
        console.log("in the update modal", task)
        const res = await axios.patch(`http://localhost:5000/edit-task/${id}`, task);
        if (res.data.modifiedCount > 0) {
            toast.success('Task edited successfully!!!', {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
            setOpen(false)
            setId(id);
            refetch();
        }
    }

    console.log(id);


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
                        <FaEdit onClick={() => handleOpen(task._id)} className="text-[20px] text-indigo-600 hover:text-green-500 cursor-pointer" />
                        <MdDelete onClick={() => handleDelete(task._id)} className="text-[22px] text-indigo-600 hover:text-red-500 cursor-pointer" />
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="flex flex-col justify-start items-center gap-3">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Title</span>
                                </div>
                                <input type="text" placeholder="Title" className="input input-bordered w-full"
                                    defaultValue={task.title}
                                    {...register("title", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Deadline</span>
                                </div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full"
                                    defaultValue={task.deadline}
                                    {...register("deadline", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Priority</span>
                                </div>
                                <select className="select select-bordered"
                                    defaultValue={task.priority}
                                    {...register("priority")}>
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
                                defaultValue={task.description}
                                {...register("description", { required: true })}
                                placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>
                        <button type="submit" className="py-2 px-8 border border-black w-full rounded-full bg-yellow-500">Submit</button>
                    </form>
                </Box>
            </Modal>
        </li>
    )
}

export default DragableTaskItem