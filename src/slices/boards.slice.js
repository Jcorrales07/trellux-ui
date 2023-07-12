import { createSlice } from '@reduxjs/toolkit'

const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
        boards: [],
    },
    reducers: {
        setBoards: (state, action) => {
            state.boards = action.payload
        },

        addNewBoard: (state, action) => {
            state.boards.push(action.payload)
        },

        getBoard: (state, action) => {
            let selectedBoard = state.boards.find(
                (board) => board.id === action.payload
            )
            return selectedBoard
        },

        deleteBoard: (state, action) => {
            let selectedBoard = state.boards.findIndex(
                (board) => board.id === action.payload
            )

            state.boards.splice(selectedBoard, 1)
        },

        updateBoard: (state, action) => {
            const { id, name, description } = action.payload
            const index = state.boards.findIndex((board) => board.id === id)
            state.boards[index] = { id, name, description }
        },
    },
})

// export de las functions (actions)
export const { addNewBoard, deleteBoard, getBoard, setBoards, updateBoard } =
    boardsSlice.actions

export default boardsSlice.reducer
