import React, { useState } from 'react'
import KanbanList from './KanbanList'
import { Draggable } from 'react-beautiful-dnd'
import { addIcon, closeIcon, draggableDots } from '../../assets/icons'
import '../css/BoardGrid.css'

const KanbanColumn = ({ columnId, column, tasks, index }) => {
    const [isAddCard, setIsAddCard] = useState(false)
    const [isAddColumn, setIsAddColumn] = useState(false)
    const [newColumnTitle, setNewColumnTitle] = useState('')
    const [listName, setListName] = useState(column ? column.title : '')
    const [columnIdName, setColumnIdName] = useState(columnId.replace(' ',''))

    return columnId === 'addColumn' ? (
        <div
            className={`h-fit min-w-[300px] rounded-xl text-white text-opacity-70 hover:text-opacity-100 bg-slate-900  hover:bg-opacity-100 mx-3 cursor-pointer transition-all ease-in delay-0 font-bold text-lg select-none 
            ${isAddColumn ? 'bg-opacity-70': 'bg-opacity-100'}`}
        >
            {!isAddColumn ? (
                <div
                    className="flex w-full h-full p-5"
                    onClick={() => {
                        setIsAddColumn((prev) => !prev)
                    }}
                >
                    <img
                        src={addIcon}
                        alt="Add Button"
                        className="h-7 w-7 mr-3"
                    />
                    <p>Create new column</p>
                </div>
            ) : (
                <div className='p-5'>
                    <input
                        type="text"
                        className="bg-transparent focus:outline-none
                        focus:outline-violet-500  rounded-md text-white p-1 w-full"
                        placeholder="Enter list title..."
                        onChange={(e) => {
                            setNewColumnTitle(e.target.value)
                        }}
                        value={newColumnTitle}
                    />
                    <div className="flex mt-2">
                        <button
                            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-2 py-1 rounded-md w-fit text-base"
                            onClick={() => {
                                if (newColumnTitle === '') return

                                setNewColumnTitle('')
                                setIsAddColumn((prev) => !prev)
                            }}
                        >
                            Add list
                        </button>
                        <button
                            className="ml-2"
                            onClick={() => {
                                setIsAddColumn((prev) => !prev)
                            }}
                        >
                            <img src={closeIcon} alt="close icon" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    ) : (
        <Draggable draggableId={columnIdName} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    style={{
                        ...provided.draggableProps.style,
                    }}
                    className="p-5 h-fit min-w-[300px] rounded-xl text-white bg-slate-950 mx-3"
                >
                    <div className="listName mb-5 w-full flex justify-between">
                        <input
                            type="text"
                            className="bg-transparent px-2 text-base font-bold focus:outline-none focus:outline-indigo-600 rounded-md w-2/3"
                            value={listName}
                            onChange={(e) => {
                                setListName(e.target.value)
                            }}
                        />
                        <div {...provided.dragHandleProps} className="w-7 h-7">
                            <img src={draggableDots} alt="Drag from here" />
                        </div>
                    </div>

                    {/* Donde van a estar las tareas */}
                    <KanbanList
                        column={column}
                        tasks={tasks}
                        isAddCard={isAddCard}
                        setIsAddCard={setIsAddCard}
                    />
                    <div
                        className={`addNewCard w-full flex px-2 py-[.2rem] rounded-md hover:text-white text-slate-500 cursor-pointer ${
                            isAddCard ? 'hidden' : 'hover:bg-slate-700'
                        }`}
                        onClick={() => {
                            setIsAddCard(true)
                        }}
                    >
                        {isAddCard ? (
                            ''
                        ) : (
                            <>
                                <img
                                    src={addIcon}
                                    alt=""
                                    className="w-3 mr-2"
                                />
                                <p>Add new card</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default KanbanColumn
