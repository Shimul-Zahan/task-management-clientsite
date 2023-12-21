import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from './Footer'
import Users from '../Components/Users'

const Home = () => {
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