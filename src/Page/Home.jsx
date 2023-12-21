import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from './Footer'
import Users from '../Components/Users'
import getAllTasks from '../Hooks/getAllTasks'

const Home = () => {

    const { data } = getAllTasks();
    console.log(data)

    return (
        <div>
            <Navbar />
            <Banner />
            <Users />
            <Footer />
        </div>
    )
}

export default Home