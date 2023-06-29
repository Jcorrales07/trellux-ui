import React from 'react';
import Navbar from './Navbar';
import './css/HomePage.css';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-20">
                <h1 className="title font-black text-pop-up-top text-gray-500 text-center">
                    Trellux
                </h1>
            </div>
        </>
    );
};

export default HomePage;
