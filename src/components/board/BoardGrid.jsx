import React from 'react';
import BoardCard from './BoardCard';
import '../css/BoardGrid.css';

// Usar la api de unsplash para hacer el background de los boards

const boards = [
    {
        title: 'Board #1',
        date: new Date().toDateString(),
    },
    {
        title: 'Board #2',
        date: new Date().toDateString(),
    },
    {
        title: 'Board #3',
        date: new Date().toDateString(),
    },
    {
        title: 'Board #4',
        date: new Date().toDateString(),
    },
];

const BoardGrid = () => {
    return (
        <div id='scrollbarRounded' className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-5 justify-items-stretch h-[91vh] overflow-x-hidden p-5 scrollbar scrollbar-thumb-slate-700 scrollbar-w-2">
            {boards.map((board, index) => (
                <BoardCard
                    key={index}
                    title={board.title}
                    date={board.date}
                    boardId={index}
                />
            ))}
        </div>
    );
};

export default BoardGrid;