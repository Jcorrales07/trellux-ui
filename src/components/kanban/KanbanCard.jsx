import React from 'react'

const KanbanCard = ({ name }) => {
  return (
    <div className='text-white p-3 rounded-md bg-slate-700 hover:bg-slate-600 cursor-pointer mb-2'>{name}</div>
  )
}

export default KanbanCard