import React, { useState } from 'react';
import KanbanLane from './KanbanLane';
import '../css/BoardGrid.css';
import { DndContext } from '@dnd-kit/core';

// Creo que si voy a usar REDUX
// Simulando el estado de las listas

const KanbanGrid = () => {
    // El setLists lo voy a usar cuando se agregue una nueva lista al estado de redux y asi se actualizan las listas
    const [lists, setLists] = useState([
        {
            id: 1,
            name: 'To Do',
            cards: [
                {
                    id: 1,
                    name: 'Card 1',
                },
                {
                    id: 2,
                    name: 'Card 2',
                },
                {
                    id: 3,
                    name: 'Card 3',
                },
            ],
        },
        { id: 2, name: 'Doing', cards: [] },
        { id: 3, name: 'Done', cards: [] },
    ]);

    return (
        //h-[86.3vh]
        <div
            id='scrollbarRounded'
            className="h-[86.3vh] w-full p-5 flex flex-row gap-4 overflow-scroll  scrollbar-track-slate-950 scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-thin scrollbar-w-1.5 scrollbar-corner-indigo-700 scrollbar-corner-rounded-full"
        >
            {lists.map((list, i) => (
                <KanbanLane key={i} list={list} />
            ))}
        </div>
    );
};

export default KanbanGrid;
