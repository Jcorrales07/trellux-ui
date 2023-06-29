import React from 'react';
import react from '../assets/react.svg';


const NavbarBoard = () => {
    return (
        <header className="w-full bg-gray-800  py-2 px-2 rounded-tr">
            <div className="ml-4">
                <img
                    // src={toggleSidebar ? close : menu}
                    alt="menu icon"
                    className="w-[28px] h-[28px] object-contain mr-4 sm:hidden"
                    // Creo que me va a tocar meterle REDUX
                    // onClick={() => {
                    //     alert(`toggleSidebar: ${!toggleSidebar}`);
                    // }}
                />
            </div>
            <div className="flex justify-end">
                <img
                    src={react}
                    alt="user avatar"
                    className="inline-block h-10 w-10 p-1 rounded-full ring-2 ring-cyan-700"
                />
            </div>
        </header>
    );
};

export default NavbarBoard;
