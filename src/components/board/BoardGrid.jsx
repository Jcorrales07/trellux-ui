import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import BoardCard from './BoardCard'
import { setPhotos } from '../../slices/boards.slice'
import { clientUnSplash } from '../../../axios.config'
import { useDispatch, useSelector } from 'react-redux'
import '../css/BoardGrid.css'

// Usar la api de unsplash para hacer el background de los boards

const getPhotos = async () => {
    return (await clientUnSplash.get('/photos?per_page=30')).data
}

const photos = await getPhotos()
//console.log(photos)

const BoardGrid = () => {
    const dispatch = useDispatch()
    dispatch(setPhotos(photos))

    const boards = useSelector((state) => state.boards.userBoards)

    return (
        <div
            id="scrollbarRounded"
            className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-5 justify-items-stretch h-[91vh] overflow-x-hidden p-5 scrollbar scrollbar-thumb-slate-700 scrollbar-w-2"
        >
            {boards.map((board, index) => {
                const formatDate = format(
                    new Date(board.createdAt),
                    'MMMM dd, yyyy'
                )
                return (
                    <BoardCard
                        key={index}
                        title={board.title}
                        date={formatDate}
                        bgPhoto={photos[index].urls.regular}
                        boardId={board.id}
                    />
                )
            })}
            <BoardCard
                key={'create-board'}
                title={'Create Board'}
                boardId={'create-board'}
            />
        </div>
    )
}

export default BoardGrid
