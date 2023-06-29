import React from 'react';
import Sidebar from './Sidebar';
import Boards from './Boards';


const Dashboard = () => (
    <div className='flex flex-row max-w-screen-xl m-auto'>
        <Sidebar />
        <Boards />
    </div>
);

export default Dashboard;
