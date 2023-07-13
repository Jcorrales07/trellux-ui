import React from 'react'
import NavbarKanban from './NavbarKanban'
import KanbanGrid from './KanbanGrid'
import NavbarBoard from '../board/NavbarBoard'
// import { DndContext } from '@dnd-kit/core';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBoard } from '../../slices/boards.slice'

const KanbanBoard = () => {
    const kanbanId = useParams().boardId
    
    const dispatch = useDispatch()
    dispatch(setBoard(kanbanId))

    const kanban = useSelector((state) => state.boards.selectedBoard)

    return (
        <div className="m-auto max-h-[100vh]">
            <NavbarBoard />
            <NavbarKanban kanban={kanban} />
            <KanbanGrid />
        </div>
    )
}

export default KanbanBoard
