import React, { useState } from 'react';
import KanbanCard from './KanbanCard';
import add from '../../assets/icons/plus-line-icon.svg';
import { DndContext, closestCenter, useDroppable } from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const KanbanList = ({ list }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: list.id,
    });
    const [listName, setListName] = useState(list.name);
    const [cards, setCards] = useState([
        { id: 1, name: 'k1' },
        { id: 2, name: 'k2' },
        { id: 3, name: 'k3' },
    ]);

    const style = {
        backgroundColor: isOver ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        setCards(() => {
            const oldIndex = cards.findIndex((card) => card.id === active.id);
            const newIndex = cards.findIndex((card) => card.id === over.id);

            return arrayMove(cards, oldIndex, newIndex);
        });
    };

    return (
        <div className="min-w-[300px] rounded-xl p-5 text-white bg-slate-950 h-max">
            <div className="listName mb-5 w-full">
                <input
                    type="text"
                    className="bg-transparent w-full px-2 text-base font-bold focus:outline-none focus:outline-indigo-600 rounded-md"
                    value={listName}
                    onChange={(e) => {
                        setListName(e.target.value);
                    }}
                />
            </div>
            <div>
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <div ref={setNodeRef} style={style} className='border'>
                        <SortableContext
                            items={cards}
                            strategy={verticalListSortingStrategy}
                        >
                            {cards.map((card, i) => (
                                <KanbanCard key={i} card={card} />
                            ))}
                        </SortableContext>
                    </div>
                </DndContext>
            </div>
            <div className="addNewCard w-full flex px-2 py-[.2rem] rounded-md hover:bg-slate-700 hover:text-white text-slate-500 cursor-pointer mt-5">
                <img src={add} alt="" className="w-3 mr-2" />
                Add a card
            </div>
        </div>
    );
};

export default KanbanList;
