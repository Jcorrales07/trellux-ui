import React, { useState } from 'react'
import KanbanLane from './KanbanLane'
import '../css/BoardGrid.css'
import { v4 as uuidv4 } from 'uuid'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
// Creo que si voy a usar REDUX
// Simulando el estado de las listas

const KanbanGrid = () => {
    // El setLists lo voy a usar cuando se agregue una nueva lista al estado de redux y asi se actualizan las listas
    const [lists, setLists] = useState([
        {
            id: uuidv4(),
            name: 'To Do',
            cards: [
                {
                    id: uuidv4(),
                    name: 'Card 1',
                },
                {
                    id: uuidv4(),
                    name: 'Card 2',
                },
                {
                    id: uuidv4(),
                    name: 'Card 3',
                },
            ],
        },
        { id: uuidv4(), name: 'Doing', cards: [] },
        { id: uuidv4(), name: 'Done', cards: [] },
    ])

    return (
        //h-[86.3vh]
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
                droppableId="kanban-grid"
                direction="horizontal"
                type="list"
            >
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        id="scrollbarRounded"
                        className="h-[86.3vh] w-full p-5 flex flex-row overflow-scroll scrollbar-track-slate-950 scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-thin scrollbar-w-1.5 scrollbar-corner-indigo-700 scrollbar-corner-rounded-full"
                    >
                        {lists.map((list, i) => (
                            <KanbanLane key={i} list={list} index={i} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )

    function onDragEnd(result) {}
}

export default KanbanGrid
