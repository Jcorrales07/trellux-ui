import React from 'react'
import NavbarBoard from './NavbarBoard'
import BoardGrid from './BoardGrid'

const Boards = () => {
  return (
    <div className='w-full flex flex-col overflow-y-hidden'>
        <BoardGrid />
    </div>
    )
}

export default Boards