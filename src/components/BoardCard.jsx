import React from 'react';

const BoardCard = ({title, date}) => (
    <div className="cursor-pointer h-40 rounded-md bg-gradient-to-r from-slate-800 to-slate-500 bg-no-repeat bg-cover relative">
        <span className="absolute bottom-1 pl-3 pb-2 text-white">
            <h1 className="font-bold text-2xl">{title}</h1>
            <h2>{date}</h2>
        </span>
    </div>
);

export default BoardCard;
