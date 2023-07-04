import React, { useState } from 'react';
import react from '../../assets/icons/react.svg';
import menu from '../../assets/icons/menu.svg';
import add from '../../assets/icons/add.svg';
import close from '../../assets/icons/close.svg';
import tailwindcss from '../../assets/icons/tailwindcss.svg';
import { useNavigate } from 'react-router-dom';

const userLinks = [
    { title: 'Your Profile', path: '/profile' },
    { title: 'Settings', path: '/settings' },
    { title: 'Sign out', path: '/login' },
];

const NavbarBoard = () => {
    const navigate = useNavigate();
    const [toggleUserMenu, setToggleUserMenu] = useState(false);
    const [wasClicked, setWasClicked] = useState(false);
    return (
        <header className="w-full bg-gray-800 rounded-tr px-5 py-3 flex justify-between items-center">
            <div>
                <img
                    src={wasClicked ? menu : close}
                    alt="menu icon"
                    className="w-[28px] h-[28px] object-contain mr-4 md:hidden block"
                    onClick={() => {
                        const sidebar = document.getElementById('sidebar');
                        sidebar.classList.toggle('hidden');
                        setWasClicked((prev) => !prev);
                    }}
                />
                <div>
                    <img
                        className="h-9 w-auto md:block hidden"
                        onClick={() => {
                            navigate('/dashboard');
                        }}
                        src={tailwindcss}
                        alt="Your Company"
                    />
                </div>
            </div>
            <div
                className="relative cursor-pointer z-30"
                onClick={() => setToggleUserMenu((prev) => !prev)}
            >
                <img
                    src={react}
                    alt="user avatar"
                    className="inline-block h-10 w-10 p-1 rounded-full ring-2 ring-cyan-700"
                />

                {toggleUserMenu ? (
                    <div
                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabindex="-1"
                    >
                        {userLinks.map((link, i) => (
                            <div
                                key={i}
                                onClick={() => navigate(link.path)}
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-700 hover:text-white"
                            >
                                {link.title}
                            </div>
                        ))}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </header>
    );
};

export default NavbarBoard;
