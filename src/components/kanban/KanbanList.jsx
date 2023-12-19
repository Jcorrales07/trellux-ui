import React, { useState } from 'react'
import KanbanCard from './KanbanCard'
import { closeIcon } from '../../assets/icons'
import { Droppable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

const KanbanList = ({ column, tasks, isAddCard, setIsAddCard }) => {
    const [columnIdName, setColumnIdName] = useState(column.title.replace(' ', ''))
    const [cards, setCards] = useState(tasks)

    //Creacion de la targeta
    const [newCard, setNewCard] = useState('')

    const createCard = () => {
        if (!newCard) return
        setCards((prev) => [
            ...prev,
            {
                // el id tiene que cambiar
                id: uuidv4(),
                content: newCard,
            },
        ])
        console.log('cartas', cards)
        setNewCard('')
    }

    return (
        <Droppable droppableId={columnIdName} type="task">
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    onDragOver={() => snapshot.isDraggingOver}
                    id="scrollbarRounded"
                    //overflow-x-hidden scrollbar-track-gray-800 scrollbar-thin scrollbar-w-1.5 scrollbar-track-rounded-full max-h-[66vh]
                    className=" max-w-[300px]"
                    style={{
                        flexGrow: 1,
                        minHeight: '48px',
                    }}
                >
                    {cards.map((card, i) => (
                        <KanbanCard key={i} card={card} index={i} />
                    ))}

                    {provided.placeholder}

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
                                    if (e.key === 'Enter') createCard()
                                    return
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
                                        setIsAddCard(false)
                                        setNewCard('')
                                    }}
                                >
                                    <img
                                        src={closeIcon}
                                        alt="cancel creation card"
                                    />
                                </button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            )}
        </Droppable>
    )
}

export default KanbanList
