import React from 'react';
import KanbanList from './KanbanList';
import '../css/BoardGrid.css';

const KanbanGrid = () => {
    return (
        <div
            id="scrollbarRounded"
            className="h-[84.5vh] w-full p-5 flex flex-row gap-4 overflow-scroll overflow-y-hidden scrollbar scrollbar-track-transparent scrollbar-thumb-slate-700 "
        >
            <KanbanList />
            <KanbanList />
            <KanbanList />
            <KanbanList />
            <KanbanList />
            <KanbanList />
        </div>
    );
};

export default KanbanGrid;
