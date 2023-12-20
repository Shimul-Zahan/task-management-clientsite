import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const navitem = [
        {
            navMenu: 'home',
            link: '/'
        },
        {
            navMenu: 'about',
            link: '/about'
        },
        {
            navMenu: 'Contact',
            link: '/contact'
        },
        {
            navMenu: 'Bla Bla bla',
            link: '/bla'
        },
    ]

    return (
        <div className='lg:px-10 py-6'>
            <div className='block lg:flex justify-between items-center space-y-3 relative'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-bold px-4'>Logo</h1>
                    <h1 onClick={()=> setShowMenu(!showMenu)} className='text-xl font-bold px-4 block lg:hidden'>X</h1>
                </div>
                <div className='hidden list-none lg:flex justify-center items-center gap-10'>
                    {
                        navitem?.map(item =>
                            <li>
                                <Link to={item.link}>{item.navMenu}</Link>
                            </li>
                        )
                    }
                    <button>
                        <Link className='bg-red-500 px-6 py-2 rounded-full'>Login</Link>
                    </button>
                </div>
                <div className={`absolute px-4 lg:hidden duration-700 list-none space-y-3 w-full bg-green-500 py-6 ${showMenu? 'left-0':'left-[-100%]'}`}>
                    {
                        navitem?.map(item =>
                            <li>
                                <Link to={item.link}>{item.navMenu}</Link>
                            </li>
                        )
                    }
                    <button>
                        <Link className='bg-red-500 px-6 py-2 rounded-full'>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar