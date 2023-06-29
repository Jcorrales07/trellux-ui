import React from 'react';
import Sidebar from './Sidebar';
import Boards from './Boards';


const Dashboard = () => (
    <div className='flex flex-row max-w-[1360px] m-auto'>
        <Sidebar />
        <Boards />
    </div>
);

export default Dashboard;
