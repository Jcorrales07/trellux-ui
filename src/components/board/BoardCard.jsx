import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

import { addNewBoard } from '../../slices/boards.slice'
import { clientTrelluxApi } from '../../../axios.config'

const BoardCard = ({ title, date, boardId, bgPhoto }) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const userLogged = useSelector((state) => state.users.userLogged)
    const username = localStorage.getItem('username')
    let boardCount = useSelector((state) => state.boards.userBoards.length)
    const photos = useSelector((state) => state.boards.bgPhotosBoards)

    const defaultBoard = {
        id: uuidv4(),
        title: '',
        bgUrl: photos[boardCount++].urls.regular,
        username,
        createdAt: format(new Date(), 'MMMM dd, yyyy'),
    }

    

    // console.log('photos', photos)
    // console.log('userLogged', userLogged)

    // CREATE BOARD
    const [isCreateBoard, setIsCreateBoard] = useState(false)
    const [board, setBoard] = useState(defaultBoard)

    const getInfo = (e) => {
        setBoard((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const createBoard = (e) => {
        if (board.title === '') return

        e.preventDefault()

        console.log('board', board)

        dispatch(addNewBoard(board))

        // sending to db
        clientTrelluxApi
            .post('/boards', board)
            .then((res) => console.log(res.data))

        setBoard(defaultBoard)
        setIsCreateBoard((prev) => !prev)
    }

    // CREATE BOARD

    return boardId === 'create-board' ? (
        <>
            <div
                className={`${
                    isCreateBoard ? 'flex' : 'hidden'
                } cursor-pointer h-44 rounded-md bg-slate-800  bg-opacity-60 drop-shadow-xl flex justify-center items-center hover:bg-opacity-90 text-slate-500 hover:text-slate-400`}
            >
                <div className="p-2 text-gray-300 h-44  rounded-md left-11" onKeyDown={(e) => {
                                    console.log(e.key)
                                    if (e.key === 'Enter') createBoard(e)
                                }}>
                    <form name="createboard" className="flex flex-col mt-5">
                        <div className="flex flex-col mb-5">
                            <label
                                htmlFor="boardtitle"
                                className="mb-2 font-bold text-xl m-auto"
                            >
                                Board Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                className="bg-transparent rounded-md focus:outline-none focus:outline-indigo-500 ring-2 ring-indigo-900 px-2"
                                onChange={getInfo}
                                value={board.title}
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={(e) => {
                                    createBoard(e)
                                }}
                                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-5 py-2 rounded-md w-fit m-auto"
                            >
                                Create
                            </button>
                            <button
                                className="text-white transition ease-in-out delay-150 bg-red-400 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 px-5 py-2 rounded-md w-fit m-auto"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setBoard(defaultBoard)
                                    setIsCreateBoard((prev) => !prev)
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                className={`${
                    isCreateBoard ? 'hidden' : 'flex'
                } cursor-pointer h-44 rounded-md bg-slate-800 bg-opacity-60 drop-shadow-xl flex justify-center items-center hover:bg-opacity-90 text-slate-500 hover:text-slate-400`}
                onClick={() => {
                    setIsCreateBoard((prev) => !prev)
                }}
            >
                <h3 className="font-bold text-base">Create new board</h3>
            </div>
        </>
    ) : (
        <div
            className={`cursor-pointer h-44 rounded-md bg-gradient-to-r from-slate-800 to-slate-500 bg-no-repeat bg-cover relative drop-shadow-xl`}
            onClick={() => {
                // ruta con el id del board
                navigate(`/board/${boardId}`)
            }}
            style={{ backgroundImage: `url(${bgPhoto})` }}
        >
            <span
                className="absolute top-3 left-2 pl-3 pb-2 text-white"
                style={{
                    textShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
                }}
            >
                <h1 className="font-bold text-2xl whitespace-normal">
                    {title}
                </h1>
                <h2>{date}</h2>
            </span>
        </div>
    )
}

export default BoardCard
