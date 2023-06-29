import React from 'react';
import './css/Navbar.css';

const navLinks = [
    { title: 'Dashboard', active: true },
    { title: 'Team', active: false },
    { title: 'Projects', active: false },
    { title: 'Calendar', active: false },
    { title: 'Documents', active: false },
    { title: 'Reports', active: false },
];

const Sidebar = () => {
    return (
        <div className="sm:flex hidden flex-col justify-between max-w-[320px] min-w-[288px] h-[100vh] p-5 bg-gray-800 rounded-tl border-neutral-800">
            <div className="w-full">
                <img
                    className="h-7 w-auto mb-5 ml-2"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />

                <div className="options w-full">
                    <nav>
                        <ul>
                            {navLinks.map((link, i) => (
                                <li
                                    key={i}
                                    className={`${
                                        i === navLinks.length - 1
                                            ? 'mb-0'
                                            : 'mb-1'
                                    }
                                    text-gray-300 font-medium cursor-pointer hover:text-white hover:bg-gray-900 hover:rounded-lg p-2 ${
                                        link.active ? 'bg-gray-900 rounded-lg' : ''
                                    }`}
                                >
                                    {link.title}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <button className="bg-indigo-600 text-white rounded-lg px-4 py-2 w-full button">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
