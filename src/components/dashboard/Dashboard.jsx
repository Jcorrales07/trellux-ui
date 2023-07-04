import React from 'react';
import Sidebar from './Sidebar';
import Boards from '../board/Boards';
import NavbarBoard from '../board/NavbarBoard';

const Dashboard = () => (
    <>
        <NavbarBoard />
        <div className='relative flex flex-row max-w-screen-xl m-auto '>
            <Sidebar />
            <Boards />
        </div>
    </>
);

export default Dashboard;
