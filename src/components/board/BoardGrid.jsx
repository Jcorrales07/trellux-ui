import React, { useState } from 'react'
import BoardCard from './BoardCard'
import '../css/BoardGrid.css'
import { clientUnSplash } from '../../../axios.config'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

// Usar la api de unsplash para hacer el background de los boards

// const boards = [
//     {
//         title: 'Board #1',
//         date: new Date().toDateString(),
//     },
//     {
//         title: 'Board #2',
//         date: new Date().toDateString(),
//     },
//     {
//         title: 'Board #3',
//         date: new Date().toDateString(),
//     },
//     {
//         title: 'Board #4',
//         date: new Date().toDateString(),
//     },
// ]

const getPhotos = async () => {
    return (await clientUnSplash.get('/photos?per_page=30')).data
}

const photos = await getPhotos()
// console.log(photos)

const BoardGrid = () => {
    const boards = useSelector((state) => state.boards.userBoards)
    console.log(boards)

    return (
        <div
            id="scrollbarRounded"
            className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-5 justify-items-stretch h-[91vh] overflow-x-hidden p-5 scrollbar scrollbar-thumb-slate-700 scrollbar-w-2"
        >
            {boards.map((board, index) => {
                const formatDate = format(new Date(board.createdAt), 'MMMM dd, yyyy')
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
        </div>
    )
}

export default BoardGrid
