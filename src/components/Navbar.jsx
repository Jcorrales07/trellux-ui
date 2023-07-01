import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';
import './css/Navbar.css';

const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/login', title: 'Login' },
    { path: '/register', title: 'Register' },
];

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="w-full bg-gray-800 py-2 px-2 rounded-t">
            <div className='max-w-screen-xl m-auto'>
                <nav className="items-center flex">
                    <div className="ml-4">
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div className="ml-10 list-none sm:flex flex-1 hidden">
                        <ul className="flex items-center gap-[3vw]">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        onClick={() => {
                                            navigate(link.path);
                                        }}
                                        className="text-gray-300  hover:rounded-lg hover:bg-slate-600 hover:text-white py-2 px-4 cursor-pointer"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggleMenu ? close : menu}
                            alt="responsive menu"
                            className="w-[28px] h-[28px] object-contain mr-4"
                            onClick={() => {
                                setToggleMenu((prev) => !prev);
                            }}
                        />

                        <div
                            className={`${
                                toggleMenu ? 'flex' : 'hidden'
                            } p-6 bg-gray-800 absolute top-12 right-0 mx-0 my-2 min-w-[140px] rounded-bl-md sidebar`}
                        >
                            <ul className="list-none flex flex-col justify-end items-center flex-1">
                                {navLinks.map((link, i) => (
                                    <li
                                        key={i}
                                        className={`${
                                            i === navLinks.length - 1
                                                ? 'mb-0'
                                                : 'mb-5'
                                        }`}
                                    >
                                        <a
                                            onClick={() => {
                                                navigate(link.path);
                                            }}
                                            className="text-gray-300  hover:rounded-lg hover:bg-slate-600 hover:text-white py-2 px-4 cursor-pointer"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
