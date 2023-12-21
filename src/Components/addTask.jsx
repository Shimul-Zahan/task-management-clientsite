import { useForm } from "react-hook-form"

const AddTask = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)   
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
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
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