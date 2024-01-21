import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const isProductsPage = location.pathname === "/products";

    return (
        <header class="antialiased">
            <nav class="bg-white flex items-center justify-between border-b-2 border-black drop-shadow-xl px-4 lg:px-6 py-2.5 ">
                <div class="flex flex-wrap justify-between items-center">
                    <div class="flex justify-start items-center pl-10">
                        <a href="/" class="flex ">
                            <img src={logo} class="h-24 w-24" alt="FlowBite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap font-poppins dark:text-white">Provision Store</span>
                        </a>
                    </div>

                </div>

                <div className='mr-40'>
                    <Link to={isProductsPage ? "/about" : "/products"}>
                        <button className="w-28 h-12 bg-stone-800 text-white rounded-md hover:bg-stone-950 focus:outline-none focus:bg-stone-600">
                            {isProductsPage ? "About" : "Products"}
                        </button>
                    </Link>
                </div>

            </nav>
        </header>



    )
}

export default Navbar