import React, { useEffect, useState } from 'react'
import BoardCard from './BoardCard'
import '../css/BoardGrid.css'
import { clientUnSplash } from '../../../axios.config'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { setPhotos } from '../../slices/boards.slice'

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
console.log(photos)

const BoardGrid = () => {
    const dispatch = useDispatch()
    dispatch(setPhotos(photos))
    const boards = useSelector((state) => state.boards.userBoards)
    console.log(boards)

    // const dispatch = useDispatch()
    // const boards = useSelector((state) => state.boards.userBoards)
    // const [photos, setPhotos] = useState([])

    // useEffect(() => {
    //     const fetchPhotos = async () => {
    //         const response = await clientUnSplash.get('/photos?per_page=30')
    //         setPhotos(response.data)
    //         console.log('photos', photos)
    //         dispatch(setPhotos(response.data))
    //     }
    //     fetchPhotos()
    // }, [dispatch])

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
