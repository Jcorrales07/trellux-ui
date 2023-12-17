import React, { useState } from 'react'
import { editIcon } from '../../assets/icons'
import { Draggable } from 'react-beautiful-dnd'

const KanbanCard = ({ card, index }) => {
    // console.log('card', card)
    const [name, setName] = useState(card.content || card.name)

    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    style={{
                        ...provided.draggableProps.style,
                    }}
                    className={`flex justify-between items-center text-white px-3 py-2 rounded-md bg-slate-700 hover:bg-slate-600 cursor-pointer mb-2 mr-1`}
                >
                    <input
                        value={name}
                        className="bg-transparent focus:outline-none   cardName"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="px-2 py-2 rounded-md hover:bg-slate-500">
                        <img
                            src={editIcon}
                            alt="edit icon"
                            className="w-4 h-4"
                        />
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default KanbanCard
