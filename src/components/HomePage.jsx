import React from 'react';
import Navbar from './Navbar';
import './css/HomePage.css';

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <div>
                <h1 className="title font-black text-pop-up-top text-gray-500 text-center md:mt-20 mt-80">
                    Trellux
                </h1>
            </div>
        </>
    );
};

export default HomePage;
