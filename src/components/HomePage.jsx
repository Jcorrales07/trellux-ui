import React from 'react';
import Navbar from './Navbar';
import './css/HomePage.css';
import tailwindcss from '../assets/icons/tailwindcss.svg';
import react from '../assets/icons/react.svg';
import vite from '../assets/icons/vite.svg';
import javascript from '../assets/icons/javascript.svg';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="title font-black text-pop-up-top text-gray-500 text-center mt-80 sm:text-9xl text-6xl">
                    Trellux
                </h1>
            </div>
            <div className="flex justify-center mt-10 gap-4">
                <img
                    src={javascript}
                    alt="javascript logo"
                    className="w-10 h-10"
                />
                <img src={react} alt="react logo" className="w-10 h-10" />
                <img src={vite} alt="vite logo" className="w-10 h-10" />
                <img src={tailwindcss} alt="tail logo" className="w-10 h-10" />
            </div>
        </>
    );
};

export default HomePage;
