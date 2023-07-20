import React, { useState } from 'react'
import KanbanList from './KanbanList'
import { addIcon, draggableDots } from '../../assets/icons'
import '../css/BoardGrid.css'
import { Draggable } from 'react-beautiful-dnd'

const KanbanLane = ({ list, index }) => {
    const [listName, setListName] = useState(list.name)
    const [isAddCard, setIsAddCard] = useState(false)

    return (
        <Draggable draggableId={list.id} index={index}>
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
                    <KanbanList
                        list={list}
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

export default KanbanLane
