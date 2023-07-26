import React, { useState } from 'react'
import { addIcon } from '../../assets/icons'
import { clientTrelluxApi } from '../../../axios.config'
import { useDispatch } from 'react-redux'
import { updateBoard } from '../../slices/boards.slice'

const NavbarKanban = ({ kanban }) => {
    const [board, setBoard] = useState(kanban)
    const [name, setName] = useState(board.title)
    const dispatch = useDispatch()

    const resizeInput = () => {
        const input = document.querySelector('.magic-input')
        const characters = input.value.length

        if (characters >= 10) {
            input.style.width = characters + 2 + 'ch'
        } else {
            input.style.width = characters + 2.5 + 'ch'
        }
    }

    const saveChanges = () => {
        // get all the changes on lists and cards
        // send them to the backend
        console.log('saving changes')

        // update the name of the board
        // send it to the backend
        console.log('updating name')

        console.log('name', name)
        console.log('board', board)

        dispatch(updateBoard({ ...board, title: name }))

        clientTrelluxApi
            .put(`/boards/${board.id}`, {
                title: name,
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <header className="text-white w-full bg-slate-950 bg-opacity-50 rounded-tr px-5 py-2 flex sm:flex-row flex-col justify-between items-center">
            <input
                type="text"
                className={`font-bold text-lg  hover:bg-slate-700 p-2 rounded-md cursor-pointer bg-transparent focus:outline-none focus:outline-indigo-500 focus:bg-slate-700 transition duration-300 ease-in-out magic-input text-start`}
                maxLength={45}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                onMouseEnter={resizeInput}
                onInput={resizeInput}
                onBlur={saveChanges}
                value={name}
            />
            <div className="flex">
                <button
                    className="py-2 px-3 rounded-md hover:text-white text-slate-400 flex items-center  hover:border-white border-slate-400 hover:border-2 transition duration-300 ease-in-out border-2"
                    onClick={saveChanges}
                >
                    Save Changes
                </button>
            </div>
        </header>
    )
}

export default NavbarKanban
