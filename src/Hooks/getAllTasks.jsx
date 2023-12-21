import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios';

const getAllTasks = () => {

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['all-tasks'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/all-task');
            return res.data;
        }
    })
    return { data, isLoading, refetch };
}

export default getAllTasks