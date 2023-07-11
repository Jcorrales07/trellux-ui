import React from 'react'
import { useNavigate } from 'react-router-dom'

const BoardCard = ({ title, date, boardId, bgPhoto }) => {
    const navigate = useNavigate()

    return (
        <div
            className={`cursor-pointer h-44 rounded-md bg-gradient-to-r from-slate-800 to-slate-500 bg-no-repeat bg-cover relative`}
            onClick={() => {
                // ruta con el id del board
                navigate(`/board/${boardId}`)
            }}
            style={{ backgroundImage: `url(${bgPhoto})` }}
        >
            <span
                className="absolute top-3 left-2 pl-3 pb-2 text-white"
                style={{
                    textShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)',
                }}
            >
                <h1 className="font-bold text-2xl">{title}</h1>
                <h2>{date}</h2>
            </span>
        </div>
    )
}

export default BoardCard
