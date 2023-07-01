import React from 'react';
import NavbarKanban from './NavbarKanban';
import KanbanGrid from './KanbanGrid';
import NavbarBoard from '../board/NavbarBoard';

const KanbanBoard = () => {
    // traer la info del kanban con el id que se pasa por parametro en la url
    // Para poder llenar el navbar

    const name = 'Kanban name';

    return (
        <div className="m-auto">
            <NavbarBoard />
            <NavbarKanban kanbanName={name} />
            <KanbanGrid />
        </div>
    );
};

export default KanbanBoard;
