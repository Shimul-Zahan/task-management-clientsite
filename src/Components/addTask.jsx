import axios from "axios"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { MyAuthContext } from "../Context/AuthContext"
import { toast } from "react-toastify"

const AddTask = () => {

    const { user } = useContext(MyAuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = async (data) => {
        const task = {
            ...data,
            email: user?.email,
            status: 'todo',
        }
        // console.log(task)
        const res = await axios.post('https://task-management-backend-puce.vercel.app/add-task', task);
        if (res.data) {
            toast.success('Success Add to task', {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
            reset();
        }
    }


    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-[90%] h-[80%] space-y-10'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="flex flex-col lg:flex-row justify-start items-center gap-3 lg:gap-10">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Title</span>
                            </div>
                            <input type="text" placeholder="Title" className="input input-bordered w-full"
                                {...register("title", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Deadline</span>
                            </div>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full"
                                {...register("deadline", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Priority</span>
                            </div>
                            <select className="select select-bordered" {...register("priority")}>
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
                            {...register("description", { required: true })}
                            placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        {errors.exampleRequired && <span>This field is required</span>}
                    </label>
                    <button type="submit" className="py-2 px-8 border border-black w-full rounded-full bg-yellow-500">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddTask

// title
// desc
// deadline
// priority
// (Low, moderate, high, etc.)