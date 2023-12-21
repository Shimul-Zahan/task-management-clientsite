import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import axios from 'axios';
import { MyAuthContext } from '../Context/AuthContext';

const getAllTasks = () => {

    const { user, loading } = useContext(MyAuthContext);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['all-tasks', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/all-task');
            return res.data;
        }
    })
    return { data, isLoading, refetch };
}

export default getAllTasks