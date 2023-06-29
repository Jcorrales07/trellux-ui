import React from 'react';
import react from '../assets/icons/react.svg';
import menu from '../assets/icons/menu.svg';
import add from '../assets/icons/add.svg';

const NavbarBoard = () => {
    return (
        <header className="w-full bg-gray-800  rounded-tr p-5 flex justify-between items-center">
            <div>
                <img
                    // src={toggleSidebar ? close : menu}
                    src={menu}
                    alt="menu icon"
                    className="w-[28px] h-[28px] object-contain mr-4 sm:hidden"
                    // Creo que me va a tocar meterle REDUX
                    // onClick={() => {
                    //     alert(`toggleSidebar: ${!toggleSidebar}`);
                    // }}
                />
            </div>
            <div className='flex gap-4'>
                <div className='cursor-pointer'>
                    <img
                        src={add}
                        alt="Create new board"
                        className="h-10 w-10 text-slate-600"
                    />
                </div>
                <div className='cursor-pointer'>
                    <img
                        src={react}
                        alt="user avatar"
                        className="inline-block h-10 w-10 p-1 rounded-full ring-2 ring-cyan-700"
                    />
                </div>
            </div>
        </header>
    );
};

export default NavbarBoard;
