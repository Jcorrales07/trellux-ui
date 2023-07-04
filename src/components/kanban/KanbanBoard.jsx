import React from 'react';
import NavbarKanban from './NavbarKanban';
import KanbanGrid from './KanbanGrid';
import NavbarBoard from '../board/NavbarBoard';
import { DndContext } from '@dnd-kit/core';
import { useParams } from 'react-router-dom';

const KanbanBoard = () => {
    // traer la info del kanban con el id que se pasa por parametro en la url
    // Para poder llenar el navbar
    const kanbanId = useParams().boardId;

    const getKanbanInfo = () => {
        //Fetch kanban with id 'kanbanId'
    };
    const kanban = { name: 'Kanban name' }; //getKanbanInfo();

    return (
        <div className="m-auto max-h-[100vh]">
            <NavbarBoard />
            <NavbarKanban kanban={kanban} />
            <KanbanGrid />
        </div>
    );
};

export default KanbanBoard;
