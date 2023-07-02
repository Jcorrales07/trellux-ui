import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const KanbanCard = ({ card }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: card.id,
        });

    const style = {
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="text-white p-3 rounded-md bg-slate-700 hover:bg-slate-600 cursor-pointer mb-2"
        >
            {card.name}
        </div>
    );
};

export default KanbanCard;
