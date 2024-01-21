import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage from '../assets/bgimage.jpg';
import logo from '../assets/logo.png';
import { toast } from 'react-toastify';
import { SHA256 } from 'crypto-js'; // Import SHA256 from crypto-js

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const enteredEmail = e.target.elements.email.value;
        const enteredPassword = e.target.elements.password.value;

        // Email validation using a simple regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(enteredEmail)) {
            alert('Invalid email format. Please enter a valid email.');
            return;
        }

        // Password complexity check using regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(enteredPassword)) {
            alert('Password must be 8 characters long, include one capital letter, one small letter, one number, and one special character.');
            return;
        }

        // Convert password to SHA256 hash
        const hashedPassword = SHA256(enteredPassword).toString();

        // Redirect if credentials are correct
        if (enteredEmail === 'test45@yopmail.com' && enteredPassword === 'Test@123') {
            toast.success('Congrats! You are logged in');
            navigate('/products');

            // Make API request with hashed password
            try {
                const response = await fetch('https://apiv2stg.promilo.com/user/oauth/token', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': process.env.REACT_APP_AUTHORIZATION
                    }
                });

                const data = await response.json();
                if (data.response && data.response.access_token) {
                    setAuthToken(data.response.access_token);
                    localStorage.setItem('access_token', data.response.access_token);
                } else {
                    console.log(data.error);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Invalid credentials. Please try with the test email and password.');
            console.log('Invalid credentials');
        }
    };

    return (<>
        <section class="h-96 lg:h-screen font-poppins">
            <div class="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
                <div
                    class="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
                    <div class="absolute inset-0 lg:bg-[#00000066] "></div>
                    <img src={bgimage}
                        alt="" class=" object-cover w-full h-full  lg:block" />
                </div>
                <div className='z-50 absolute top-4 left-4 w-72 h-72'>
                    <img src={logo} alt="" className='filter invert' />
                </div>

                <div>
                    <div class="absolute inset-0 bg-black opacity-30"></div>

                </div>
                <div class="flex items-center justify-center">
                    <div class="relative max-w-6xl px-4 mx-auto">
                        <div class="max-w-xl mx-auto lg:max-w-5xl">
                            <div class="flex flex-wrap items-center -mx-4">
                                <div class="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                                    <h2
                                        class="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl">
                                        Welcome to Provision Store</h2>
                                    <p class="text-lg text-left text-gray-200 dark:text-gray-300 ">Your one stop shop for all provision needs!</p>
                                </div>
                                <div class="w-full px-4 lg:w-2/5">
                                    <div class="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                        <h2 class="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400">
                                            Login your account</h2>
                                        <form onSubmit={handleSubmit} action="" class="p-0 m-0">
                                            <div>
                                                <label for=""
                                                    class="text-lg font-medium text-gray-700 dark:text-gray-400">Email:</label>
                                                <input type="email"
                                                    class="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                    name="email" placeholder="Enter your email" />
                                            </div>
                                            <div class="mt-5">
                                                <div>
                                                    <label for=""
                                                        class="text-lg font-medium text-gray-700 dark:text-gray-400 ">Password:</label>
                                                    <div class="relative flex items-center mt-2">
                                                        <input type="password"
                                                            class="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                                            name="password" placeholder="Enter password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                class="w-full px-4 py-3 mt-8 font-semibold text-gray-200 bg-blue-500 rounded-lg dark:bg-blue-500 hover:text-blue-200 "
                                                type="submit">LOGIN</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='absolute bottom-2 font-poppins text-white left-[38%] bg-transparent'>
                    Made by <strong>Irfan</strong>
                </footer>
            </div>

        </section>
    </>
    )
}

export default Login