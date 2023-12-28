import getAllTasks from "../Hooks/getAllTasks";

const SeePreviousTask = () => {

    const { data, isLoading, refetch } = getAllTasks()

    console.log(data);
    return (
        <div className="lg:p-20  mt-10 ">
            <h1 className="text-center text-3xl font-semibold mb-4 ">See Previous Task</h1>
            <div className="overflow-x-auto ">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right font-bold">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Date</th>
                            <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">priority</th>
                            <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y text-center divide-gray-200">
                        {
                            data?.map(task => <tr key={task._id} className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{task.title}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{task.deadline}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{task.priority}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{task.status}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SeePreviousTask;