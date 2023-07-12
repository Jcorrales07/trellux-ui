import React, { useState } from 'react'
import { addIcon } from '../../assets/icons';
import { clientTrelluxApi } from '../../../axios.config'
import { useSelector } from 'react-redux'
import '../css/Navbar.css'

const navLinks = [
    { title: 'Boards', active: true },
    { title: 'Team', active: false },
    { title: 'Projects', active: false },
    { title: 'Calendar', active: false },
    { title: 'Documents', active: false },
    { title: 'Reports', active: false },
]

const Sidebar = () => {
    const userLogged = useSelector((state) => state.users.userLogged)
    console.log('userLogged', userLogged)
    const [isCreateBoard, setIsCreateBoard] = useState(false)
    const [board, setBoard] = useState({
        title: '',
        description: '',
        username: userLogged.username,
    })

    const getInfo = (e) => {
        setBoard((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div
            id="sidebar"
            className="md:static md:bg-transparent md:h-auto flex  flex-col justify-between  sm:min-w-[230px] md:min-w-[288px] p-5 font-medium absolute z-10 bg-slate-900 h-[92.3vh]"
        >
            <div className="w-full min-w-[230px]">
                <nav>
                    <ul>
                        {navLinks.map((link, i) => (
                            <li
                                key={i}
                                className={`${
                                    i === navLinks.length - 1 ? 'mb-1' : 'mb-1'
                                }
                                    text-gray-300 cursor-pointer hover:text-white hover:bg-gray-800 hover:rounded-lg p-2 ${
                                        link.active
                                            ? 'bg-gray-800 rounded-lg'
                                            : ''
                                    }`}
                            >
                                {link.title}
                            </li>
                        ))}
                    </ul>
                </nav>
                <hr />

                {isCreateBoard ? (
                    <div className="p-2 mt-10 text-gray-300">
                        <label
                            htmlFor="createboard"
                            className="font-bold text-xl m-auto"
                        >
                            Create New Board
                        </label>
                        <hr />
                        <form name="createboard" className="flex flex-col mt-5">
                            <div className="flex flex-col mb-5">
                                <label htmlFor="boardtitle" className="mb-2">
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

                            <div className="flex flex-col mb-5">
                                <label
                                    htmlFor="boarddescription"
                                    className="mb-2"
                                >
                                    Board Description
                                </label>
                                <textarea
                                    name="description"
                                    id=""
                                    cols="10"
                                    rows="3"
                                    className="focus:outline-none focus:outline-indigo-500 bg-transparent rounded-md ring-2 ring-indigo-900 px-2"
                                    onChange={getInfo}
                                    value={board.description}
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()

                                    console.log('board', board)

                                    // aca se manda a la base de datos
                                    clientTrelluxApi
                                        .post('/boards', board)
                                        .then((res) => console.log(res.data))

                                    // pero tengo que hacer que se renderice el nuevo board
                                    // Entonces lo voy a guardar en el array de boards en redux y asi se renderiza
                                    // REDUX PROCEDURE

                                    setBoard({
                                        title: '',
                                        description: '',
                                        username: '',
                                    })
                                    setIsCreateBoard((prev) => !prev)

                                    // Voy a tomar la info
                                    // Mandarla al backend
                                    // Pero no se si ponerle REDUX a esta vaina para que renderice el board nuevo
                                    // Pero entonces como lo guardo??
                                }}
                                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-5 py-2 rounded-md w-fit m-auto"
                            >
                                Create
                            </button>
                        </form>
                    </div>
                ) : (
                    ''
                )}
            </div>

            <button
                className="bg-indigo-600 text-white rounded-lg px-4 py-2 w-full button"
                onClick={() => {
                    setIsCreateBoard((prev) => !prev)
                }}
            >
                {isCreateBoard ? (
                    'Cancel'
                ) : (
                    <>
                        <div className="cursor-pointer mr-3">
                            <img
                                className="h-4 w-4 text-slate-600"
                                src={addIcon}
                                alt="Create new board"
                            />
                        </div>
                        Create New Board
                    </>
                )}
            </button>
        </div>
    )
}

export default Sidebar
