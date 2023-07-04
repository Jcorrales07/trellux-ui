import React, { useState } from 'react';
import KanbanCard from './KanbanCard';
import { DndContext, closestCenter, useDroppable } from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import close from '../../assets/icons/close.svg';

const KanbanList = ({ list, isAddCard, setIsAddCard }) => {
    const { isOver, setNodeRef } = useDroppable({ id: list.id });

    // el array de cards
    const [cards, setCards] = useState(list.cards);

    //Creacion de la targeta
    const [newCard, setNewCard] = useState('');

    const createCard = () => {
        if (!newCard) return;
        setCards((prev) => [
            ...prev,
            {
                // el id tiene que cambiar
                id: Date.now(),
                name: newCard,
            },
        ]);
        setNewCard('');
    };

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
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            {/* className='overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-w-1' */}
            <div
                ref={setNodeRef}
                style={style}
                id="scrollbarRounded"
                //overflow-x-hidden scrollbar-track-gray-800 scrollbar-thin scrollbar-w-1.5 scrollbar-track-rounded-full max-h-[66vh]
                className=" max-w-[300px] "
            >
                <SortableContext
                    items={cards}
                    strategy={verticalListSortingStrategy}
                >
                    {cards.map((card, i) => (
                        <KanbanCard key={i} card={card} />
                    ))}

                    {/* Create new card function */}
                    {isAddCard ? (
                        <div className="mr-1">
                            <input
                                type="text"
                                size={1}
                                className="text-white p-3 rounded-md bg-slate-700 hover:bg-slate-600 cursor-pointer mb-2 w-full focus:outline-none"
                                placeholder="Enter a title for this card..."
                                value={newCard}
                                onChange={(e) => setNewCard(e.target.value)}
                                onKeyUpCapture={(e) => {
                                    if (e.key === 'Enter') createCard();
                                    return;
                                }}
                            />
                            <div className="flex">
                                <button
                                    className="text-white px-5 py-2 rounded-md bg-indigo-700 mr-5"
                                    onClick={createCard}
                                >
                                    Add Card
                                </button>
                                <button
                                    onClick={() => {
                                        setIsAddCard(false);
                                        setNewCard('');
                                    }}
                                >
                                    <img
                                        src={close}
                                        alt="cancel creation card"
                                    />
                                </button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </SortableContext>
            </div>
        </DndContext>
    );
};

export default KanbanList;
