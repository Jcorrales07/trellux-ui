import React, { useState } from 'react';
import KanbanList from './KanbanList';
import '../css/BoardGrid.css';
import { DndContext } from '@dnd-kit/core';

// Creo que si voy a usar REDUX
// Simulando el estado de las listas

const KanbanGrid = () => {
    // El setLists lo voy a usar cuando se agregue una nueva lista al estado de redux y asi se actualizan las listas
    const [lists, setLists] = useState([
        { name: 'To Do', id: 1 },
        { name: 'Doing', id: 2 },
        { name: 'Done', id: 3 },
    ]);

    // const [parent, setParent] = useState(null);

    // const handleDragEnd = (event) => {
    //     const {over} = event;

    //     setParent(over ? over.id : null)
    // }

    return (
        <div
            id="scrollbarRounded"
            className="h-[84.5vh] w-full p-5 flex flex-row gap-4 overflow-scroll overflow-y-hidden scrollbar scrollbar-track-transparent scrollbar-thumb-slate-700 "
        >
            {/* <DndContext onDragEnd={handleDragEnd}> */}
                {lists.map((list, i) => (
                    <KanbanList key={i} list={list} />
                ))}
            {/* </DndContext> */}
        </div>
    );
};

export default KanbanGrid;
