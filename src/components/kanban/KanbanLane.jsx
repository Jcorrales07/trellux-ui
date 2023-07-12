import React, { useState } from 'react';
import KanbanList from './KanbanList';
import { addIcon } from '../../assets/icons';
import '../css/BoardGrid.css';

const KanbanLane = ({ list }) => {
    const [listName, setListName] = useState(list.name);
    const [isAddCard, setIsAddCard] = useState(false);

    return (
        <div className="h-fit min-w-[300px] rounded-xl p-5 text-white bg-slate-950">
            <div className="listName mb-5 w-full">
                <input
                    type="text"
                    className="bg-transparent w-full px-2 text-base font-bold focus:outline-none focus:outline-indigo-600 rounded-md"
                    value={listName}
                    onChange={(e) => {
                        setListName(e.target.value);
                    }}
                />
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
                    setIsAddCard(true);
                }}
            >
                {isAddCard ? (
                    ''
                ) : (
                    <>
                        <img src={addIcon} alt="" className="w-3 mr-2" />
                        <p>Add new card</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default KanbanLane;
