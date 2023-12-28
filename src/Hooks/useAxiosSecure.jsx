import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://task-management-backend-puce.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure