import React from 'react'
import KanbanGrid from './KanbanGrid'
import NavbarKanban from './NavbarKanban'
import NavbarBoard from '../board/NavbarBoard'
import { useParams } from 'react-router-dom'
import { setBoard } from '../../slices/boards.slice'
import { useDispatch, useSelector } from 'react-redux'

const KanbanBoard = () => {
    const kanbanId = useParams().boardId
    
    const dispatch = useDispatch()
    dispatch(setBoard(kanbanId))

    const kanban = useSelector((state) => state.boards.selectedBoard)
    console.log('kanban', kanban)

    return (
        <div
            className="m-auto max-h-[100vh] bg-cover"
            style={{ backgroundImage: `url(${kanban.bgUrl})` }}
        >
            <NavbarBoard />
            <NavbarKanban kanban={kanban} />
            <KanbanGrid />
        </div>
    )
}

export default KanbanBoard
