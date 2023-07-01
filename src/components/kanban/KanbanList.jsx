import React, { useState } from 'react';
import KanbanCard from './KanbanCard';
import add from '../../assets/icons/plus-line-icon.svg';

const KanbanList = () => {
    const [listName, setListName] = useState('My List');

    return (
        <div className="min-w-[300px] rounded-xl p-5 text-white bg-slate-950 h-max">
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
            <div className="listOfCards">
                {/* Tirar array de cartas */}
                <KanbanCard name={'k1'}/>
                <KanbanCard name={'k2'}/>
                <KanbanCard name={'k3'}/>
            </div>
            <div className="addNewCard w-full flex px-2 py-[.2rem] rounded-md hover:bg-slate-700 hover:text-white text-slate-500 cursor-pointer mt-5">
              <img src={add} alt="" className='w-3 mr-2' />Add a card</div>
        </div>
    );
};

export default KanbanList;
