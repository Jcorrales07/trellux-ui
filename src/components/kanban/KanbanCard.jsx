import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { editIcon } from '../../assets/icons';

// asociarle un papá
const KanbanCard = ({ card }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: card.id,
        });


    const style = {
        transform: CSS.Transform.toString(transform),
    };

    const [name, setName] = useState(card.name);

    console.log('listeners', listeners)
    return (
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="flex justify-between items-center text-white px-3 py-2 rounded-md bg-slate-700 hover:bg-slate-600 cursor-pointer mb-2 mr-1"
        >
            <input
                value={name}
                className="bg-transparent focus:outline-none focus:outline-gray-700"
            />
            <div className="px-2 py-2 rounded-md hover:bg-slate-500">
                <img src={editIcon} alt="edit icon" className="w-4 h-4" />
            </div>
        </div>
    );
};

export default KanbanCard;
