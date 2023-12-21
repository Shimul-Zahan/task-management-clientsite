import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyAuthContext } from '../Context/AuthContext';
// import Swal from 'sweetalert2'

const Login = () => {

    const { emailLogin, googleLogin } = useContext(MyAuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;

        emailLogin(email, password)
            .then(res => {
                navigate('/');
            })
            .catch(err => setError(err.message.slice(10, 100)))
    }


    const googleSignIn = () => {
        googleLogin()
            .then(res => {
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                console.log(userInfo);
            })
            .catch(err => setError(err.message.slice(10, 100)))
    }


    return (
        <div className='min-h-screen bg-black bg-blend-overlay bg-opacity-80' style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/register-now-label-with-megaphone-badge-registration_349999-1466.jpg?w=1060")', backgroundSize: 'cover' }}>
            <section className=" dark:bg-gray-900">
                <div className="flex flex-col lg:gap-20 lg:flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full shadow-xl text-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-green-600 md:text-2xl dark:text-white">
                                Sign Up to Your Account
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 font-medium text-white dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-white sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-white dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-white sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                {
                                    error && <div className='text-red-600 text-base'>{error}</div>
                                }

                                <button type="submit" className="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg bg-green-600 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                                <button onClick={googleSignIn} class="group w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo" />
                                        <span class="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                    </div>
                                </button>
                                <p className="font-light text-white dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-yellow-600 hover:underline dark:text-primary-500"><Link to='/register'>Registration Now</Link></a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login